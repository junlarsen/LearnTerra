import React from 'react'
import { BoardWrapper, BoardRow, GameBoard, Card, InfoBox } from './styles'

export function Board() {
  return (
    <BoardWrapper>
      {/* TODO: make board thinner, add tags / game nexus */}
      <InfoBox>
        All active annotations for this frame probably
      </InfoBox>

      <GameBoard>
        <BoardRow className="dark"></BoardRow>
        <BoardRow className="light"></BoardRow>
        <BoardRow className="light"></BoardRow>
        <BoardRow className="dark">
          <Card>Yes</Card>
        </BoardRow>
      </GameBoard>
    </BoardWrapper>
  )
}