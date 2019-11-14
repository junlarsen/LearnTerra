import os
import threading
import time
import traceback

import requests
import datetime
import logging
import uuid

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
    global GAME_STATE, GAME_ID

    try:
        response = requests.get(f'http://localhost:{PORT}/positional-rectangles', timeout=1)
        data = response.json()

        if data['GameState'] == 'Menus':
            GAME_STATE = data['GameState']

        if not data['Rectangles']:
            logger.info(f'Received empty response: {data}')
            return
    except (ConnectionRefusedError, requests.exceptions.ConnectionError):
        logger.info('Connection refused')
        return

    previous_state = GAME_STATE
    GAME_STATE = data['GameState']
    if GAME_STATE == 'InProgress' and previous_state != GAME_STATE:
        GAME_ID = str(uuid.uuid4())
        logger.info(f'Detected a new match, setting game_id={GAME_ID}')

    file_name = f'.data/{GAME_ID}/{int(datetime.datetime.now().timestamp())}.json'
    os.makedirs(os.path.dirname(file_name), exist_ok=True)

    with open(file_name, 'w') as data_file:
        data_file.write(response.text)
        logger.info(f'Request succeeded, saving to {file_name}')


if __name__ == '__main__':
    polling_thread = threading.Thread(target=lambda: every(1/5, poll_lor_api))
    polling_thread.daemon = True
    polling_thread.start()

    input('Press any key to terminate\n')
