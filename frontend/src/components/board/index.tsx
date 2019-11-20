import React, { PropsWithChildren } from 'react'
import { BoardWrapper, BoardRow, GameBoard, CardBox, CardDescription, CardImage, StatBoxes, StatBox } from './styles'

type CardData = {
  id: string /* Card ID, image is ${id}-full.png */
  description: string
  cost: number
  attack: number
  health: number
}

function Card({ card: { id, description, cost, attack, health }}: PropsWithChildren<{ card: CardData }>): JSX.Element {
  return (
    <CardBox>
      <CardImage src={`https://supergrecko.com/cards/${id}-full.png`} />
      <CardDescription>{description}</CardDescription>

      <StatBoxes>
        <StatBox className="orange">{attack}</StatBox>
        <StatBox className="blue">{cost}</StatBox>
        <StatBox className="red">{health}</StatBox>
      </StatBoxes>
    </CardBox>
  )
}

export function Board() {
  return (
    <BoardWrapper>
      <GameBoard>
        <BoardRow className="dark"></BoardRow>
        <BoardRow className="light"></BoardRow>
        <BoardRow className="light"></BoardRow>
        <BoardRow className="dark">
          <Card card={{
            id: '01DE001',
            description: 'Play or Strike: Create 2 Spinning Axe in hand.',
            cost: 1,
            attack: 1,
            health: 1
          }} />
        </BoardRow>
      </GameBoard>
    </BoardWrapper>
  )
}