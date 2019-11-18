import os
import threading
import time
import traceback

import requests
import datetime
import logging
import uuid

import d3dshot

logger = logging.getLogger('collector')

logging.basicConfig(
    level=logging.INFO,
    format='[%(processName)s|%(threadName)s] %(asctime)s %(name)s:%(levelname)s: %(message)s'
)

PORT = 21337

# TODO: refactor into state
START_ID = str(uuid.uuid4())
GAME_ID = START_ID
GAME_STATE = None
STARTED_AT = None

screenshot_producer = d3dshot.create()


def every(delay, task):
    next_time = time.time() + delay
    while True:
        time.sleep(max(0, next_time - time.time()))
        try:
            task()
        except Exception:
            traceback.print_exc()  # TODO: better error handling

        next_time += (time.time() - next_time) // delay * delay + delay


def poll_lor_api():
    global GAME_STATE, GAME_ID, STARTED_AT

    try:
        response = requests.get(f'http://localhost:{PORT}/positional-rectangles', timeout=1)
        data = response.json()

        if data['GameState'] == 'Menus':
            GAME_STATE = data['GameState']

        if not data['Rectangles'] and data['GameState'] != 'InProgress':
            # screenshot_producer.stop()

            logger.info(f'Received empty response: {data}')
            return
    except (ConnectionRefusedError, requests.exceptions.ConnectionError):
        logger.info('Connection refused')
        return

    previous_state = GAME_STATE
    GAME_STATE = data['GameState']

    if GAME_STATE == 'InProgress' and previous_state != GAME_STATE:
        GAME_ID = str(uuid.uuid4())
        STARTED_AT = datetime.datetime.now()
        logger.info(f'Detected a new match at {STARTED_AT}, setting game_id={GAME_ID}')

        screenshot_dir = f'.data/{GAME_ID}/capture'
        os.makedirs(screenshot_dir, exist_ok=True)
        # screenshot_producer.screenshot_to_disk_every(1, directory=screenshot_dir)

    game_length = datetime.datetime.now() - STARTED_AT

    file_name = f'.data/{GAME_ID}/{int(game_length.total_seconds())}.json'
    screenshot_file_name = f'.data/{GAME_ID}/capture/{int(game_length.total_seconds())}.png'

    os.makedirs(os.path.dirname(file_name), exist_ok=True)

    with open(file_name, 'w') as data_file:
        data_file.write(response.text)
        logger.info(f'Request succeeded, saving to {file_name}')

    screenshot(screenshot_file_name)


def screenshot(file_name, window_name='Legends of Runeterra'):
    # https://stackoverflow.com/questions/19695214/python-screenshot-of-inactive-window-printwindow-win32gui
    import win32gui
    import win32ui
    from ctypes import windll
    from PIL import Image

    hwnd = win32gui.FindWindow(None, window_name)

    # Change the line below depending on whether you want the whole window
    # or just the client area.
    #left, top, right, bot = win32gui.GetClientRect(hwnd)
    left, top, right, bot = win32gui.GetWindowRect(hwnd)
    w = right - left
    h = bot - top

    hwndDC = win32gui.GetWindowDC(hwnd)
    mfcDC  = win32ui.CreateDCFromHandle(hwndDC)
    saveDC = mfcDC.CreateCompatibleDC()

    saveBitMap = win32ui.CreateBitmap()
    saveBitMap.CreateCompatibleBitmap(mfcDC, w, h)

    saveDC.SelectObject(saveBitMap)

    # Change the line below depending on whether you want the whole window
    # or just the client area.
    #result = windll.user32.PrintWindow(hwnd, saveDC.GetSafeHdc(), 1)
    result = windll.user32.PrintWindow(hwnd, saveDC.GetSafeHdc(), 0)

    bmpinfo = saveBitMap.GetInfo()
    bmpstr = saveBitMap.GetBitmapBits(True)

    im = Image.frombuffer(
        'RGB',
        (bmpinfo['bmWidth'], bmpinfo['bmHeight']),
        bmpstr, 'raw', 'BGRX', 0, 1)

    win32gui.DeleteObject(saveBitMap.GetHandle())
    saveDC.DeleteDC()
    mfcDC.DeleteDC()
    win32gui.ReleaseDC(hwnd, hwndDC)

    if result == 1:
        logger.info(f'Saving screenshot to {file_name}')
        im.save(file_name)


if __name__ == '__main__':
    polling_thread = threading.Thread(target=lambda: every(1/5, poll_lor_api))
    polling_thread.daemon = True
    polling_thread.start()

    input('Press any key to terminate\n')
