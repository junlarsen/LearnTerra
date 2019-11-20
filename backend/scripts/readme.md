## Scripts

`staticdata.js` processes the raw recorded frames and adds basic information to each rectangle, such as card description, stats, art, etc.

additionally, the script blends in data produced by the object detection model to display actual stats and mana costs of the cards in play - which aren't available in the API

### Usage
```bash
cd backend

npm install

node scripts/staticdata.js
```
