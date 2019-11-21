export interface GameSchema {
  gameId: string
  frameCount: number
  game: Array<GameFrame>
  annotations: Array<Annotation>
}

// Frame from actual API
export interface DefaultFrame {
  GameState: string
  Screen: ScreenData
  Rectangles: Array<Rectangle>
  recordedAt: number
}

// Frame we transform to
export interface GameFrame {
  GameState: string
  Screen: ScreenData
  OpponentHand: Array<Rectangle>
  OpponentBoard: Array<Rectangle>
  UserHand: Array<Rectangle>
  UserBoard: Array<Rectangle>
  recordedAt: number
  OpponentHealth: number
  UserHealth: number
}

export interface ScreenData {
  ScreenWidth: number
  ScreenHeight: number
}

export interface StaticData {
  name: string
  desc: string
  cost: number
  attack: number
  health: number
  img: string
  type: string
}

export interface CurrentStats {
  attack: number
  health: number
  cost: number
}

export interface Rectangle {
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

export interface Annotation {
  frame: number
  text: string
  date: number
}