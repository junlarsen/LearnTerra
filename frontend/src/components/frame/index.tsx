import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Wrapper, GameCode } from './styles'
import { Row, RowHeader } from '../row'
import { Board } from '../board'

export function Frame() {
  const theme = useContext(ThemeContext)

  return (
    <>
      <Row color={theme.color.light}>
        <Wrapper>
          <RowHeader>MATCH FRAMES</RowHeader>
          <RowHeader>GAME CODE: <GameCode>000fff</GameCode></RowHeader>
        </Wrapper>
      </Row>

      <Board/>
    </>
  )
}