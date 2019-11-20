## Collector

Very barebones utility script that runs in the background and periodically polls LoR API for the current state of the game, 
in case a new game is started within the player's session, a new, unique folder is generated in `collector/.data`.

Furthermore, the script also captures a screenshot of the game's window that will be used in the object detection pipeline. 
The aforementioned functionality only works on Windows as the game itself cannot be ran on a different platform.

### Usage
Requires `pipenv` and Python 3.6+
```bash
pipenv install

pipenv run python collector.py
# or
pipenv shell
python collector.py
```
