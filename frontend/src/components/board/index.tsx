import React, { PropsWithChildren } from 'react'
import { BoardWrapper, BoardRow, GameBoard, CardBox, CardDescription, CardImage, StatBoxes, StatBox } from './styles'
import { GameFrame, Rectangle } from '../../../../backend/src/schema'
import { useSelector } from 'react-redux'

type CardData = {
  id: string /* Card ID, image is ${id}-full.png */
  description: string
  attack: number
  health: number
}

function CardComponent({ card: { id, description, attack, health }}: PropsWithChildren<{ card: CardData }>): JSX.Element {
  return (
    <CardBox>
      <CardImage src={`https://supergrecko.com/cards/${id}-full.png`} />
      <CardDescription>{description}</CardDescription>

      <StatBoxes>
        <StatBox className="orange">{attack}</StatBox>
        <StatBox className="red">{health}</StatBox>
      </StatBoxes>
    </CardBox>
  )
}

function cardOf({ staticData, currentStats: { cost, attack, health }, CardCode }: Rectangle): JSX.Element {
  return (
    <CardComponent card={{
      id: CardCode,
      description: staticData.desc || "No description provided",
      attack,
      health
    }} />
  )
}

export function Board() {
  const { frame, frames } = useSelector((state: any) => state.app)
  const current: GameFrame = frames[frame - 1]

  return (
    <BoardWrapper>
      <GameBoard>
        <BoardRow className="dark">
          {(current.OpponentHand.map(e => cardOf(e)))}
        </BoardRow>
        <BoardRow className="light">
          {(current.OpponentBoard.map(e => cardOf(e)))}
        </BoardRow>
        <BoardRow className="light">
          {(current.UserBoard.map(e => cardOf(e)))}
        </BoardRow>
        <BoardRow className="dark">
          {(current.UserHand.map(e => cardOf(e)))}
        </BoardRow>
      </GameBoard>
    </BoardWrapper>
  )
}