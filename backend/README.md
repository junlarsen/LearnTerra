# Backend

The backend also built with Typescript is running an ExpressJS server and acts like a basic REST-ful API.

## Deployment

Development and deployment is ran using the same command.

```
npm install
npm start
```

This will run the typescript compiler on the source and start the express server.

The server is now available at http://localhost:8001

## API Paths

The backend has two API endpoints.

## `GET /api/v1/game/{gameId}`

Get the game information for given game id

#### Response

Error: 404 `{ status: 404, message: 'Game Not Found' }`
Success: 200 `GameSchema` ([see dto objects](#dto-objects))

## `POST /api/v1/annotations/{gameId}/{frame}`

Submit a comment to the game at given frame.

#### Expected Payload

```typescript 
interface Payload {
  text: string
  frame: number
}
```

#### Response

Error: 400 `{ status: 400, message: 'Invalid API Schema }`

Success: 200 `{ status: 200, message: 'Success' }`

## DTO Objects

```typescript
interface GameSchema {
  gameId: string
  frameCount: number
  game: Array<GameFrame>
  annotations: Array<Annotation>
}
```

```typescript
interface GameFrame {
  GameState: string
  Screen: ScreenData
  OpponentHand: Array<Rectangle>
  OpponentBoard: Array<Rectangle>
  UserHand: Array<Rectangle>
  UserBoard: Array<Rectangle>
  recordedAt: number
}
```

```typescript
interface ScreenData {
  ScreenWidth: number
  ScreenHeight: number
}
```

```typescript
interface StaticData {
  name: string
  desc: string
  cost: number
  attack: number
  health: number
  img: string
  type: string
}
```

```typescript
interface CurrentStats {
  attack: number
  health: number
  cost: number
}
```

```typescript
interface Rectangle {
  CardID: number
  CardCode: string
  TopLeftX: number
  TopLeftY: number
  Width: number
  Height: number
  LocalPlayer: boolean,
  staticData: StaticData,
  currentStats: CurrentStats
}
```

```typescript
interface Annotation {
  frame: number
  text: string
  date: number
}
```