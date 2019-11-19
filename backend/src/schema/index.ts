export interface GameSchema {
  gameId: number
  frameCount: number,
  game: GameFrame,
  annotations: Array<Annotation>
}

export interface GameFrame {
  GameState: string
  Screen: ScreenData
  Rectangles: Array<Rectangle>
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
}