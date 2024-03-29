import React, { PropsWithChildren } from 'react'
import {
  BoardWrapper,
  BoardRow,
  GameBoard,
  CardBox,
  CardDescription,
  CardImage,
  StatBoxes,
  StatBox,
  CardTitle,
  Overlay,
  OverlayTitle,
  OverlayText
} from './styles'
import { GameFrame, Rectangle } from '../../../../backend/src/schema'
import { useSelector } from 'react-redux'

type CardData = {
  id: string /* Card ID, image is ${id}-full.png */
  name: string
  description: string
  attack: number
  health: number
  baseAttack: number
  baseHealth: number
}

function CardComponent({ card: { id, name, description, attack, health, baseAttack, baseHealth } }: PropsWithChildren<{ card: CardData }>): JSX.Element {
  return (
    <CardBox>
      <CardImage src={`https://supergrecko.com/cards/${id}-full.png`} title={description}/>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>

      <StatBoxes>
        <StatBox key="attack"
                 className={'orange ' + (attack < baseAttack ? 'lowerStat' : '') + (attack > baseAttack ? 'higherStat' : '')}
                 title="Attack">{attack}</StatBox>
        <StatBox key="defense"
                 className={'red  ' + (health < baseHealth ? 'lowerStat' : '') + (health > baseHealth ? 'higherStat' : '')}
                 title="Health">{health}</StatBox>
      </StatBoxes>
    </CardBox>
  )
}

function cardOf({ staticData, currentStats: { attack, health }, CardCode }: Rectangle): JSX.Element {
  return (
    <CardComponent key={`card-${CardCode}-${Math.random().toString(16)}`} card={{
      id: CardCode,
      name: staticData.name || 'Unknown name',
      description: staticData.desc || ' ',
      attack,
      health,
      baseAttack: staticData.attack,
      baseHealth: staticData.health
    }}/>
  )
}

export function Board() {
  const { frame, frames } = useSelector((state: any) => state.app)
  const current: GameFrame = frames[frame - 1]
  const defeated = current.UserHealth <= 0 || current.OpponentHealth <= 0
  const winner = current.UserHealth <= 0
  const leftovers = !winner
    ? current.UserHealth
    : current.OpponentHealth

  return (
    <BoardWrapper>
      <Overlay className={defeated ? '' : 'hidden'}>
        <OverlayTitle>{winner ? 'DEFEAT' : 'VICTORY'}</OverlayTitle>
        {!winner && <OverlayText>You defeated your opponent with {leftovers} health left!</OverlayText>}
        {winner && <OverlayText>Your opponent defeated you with {leftovers} health left!</OverlayText>}
      </Overlay>
      <GameBoard className="defeated">
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