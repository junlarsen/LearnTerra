import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { Wrapper, GameCode } from './styles'
import { Row, RowHeader, RowIcon } from '../row'
import { Board } from '../board'

import NavigateBefore from '../../assets/navigate-before.svg'
import NavigateAfter from '../../assets/navigate-next.svg'

export function Frame() {
  const theme = useContext(ThemeContext)

  return (
    <>
      <Row color={theme.color.light}>
        <Wrapper>
          <RowHeader>MATCH FRAMES</RowHeader>
          <div>
            <Wrapper className={"controls"}>
              <RowIcon>
                <img alt={"Previous Frame"} src={NavigateBefore} />
              </RowIcon>
              <RowHeader>3/64</RowHeader>
              <RowIcon>
                <img alt={"Next Frame"} src={NavigateAfter} />
              </RowIcon>
            </Wrapper>
          </div>
          <RowHeader>GAME CODE: <GameCode>000fff</GameCode></RowHeader>
        </Wrapper>
      </Row>

      <Board/>
    </>
  )
}