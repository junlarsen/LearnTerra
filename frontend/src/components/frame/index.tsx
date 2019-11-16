import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { Wrapper, GameCode } from './styles'
import { Row, RowHeader, RowAction } from '../row'
import { Board } from '../board'

import NavigateBefore from '../../assets/navigate-before.svg'
import NavigateAfter from '../../assets/navigate-next.svg'

export function Frame() {
  const theme = useContext(ThemeContext)

  const [frame, setFrame] = useState(0)

  return (
    <>
      <Row color={theme.color.light}>
        <Wrapper>
          <RowHeader>MATCH FRAMES</RowHeader>
          <div>
            <Wrapper className="controls">
              <RowAction className="button" role="button">
                <img alt="Previous Frame" src={NavigateBefore} onClick={() => setFrame(frame - 1)} />
              </RowAction>
              <RowHeader>{frame}/0</RowHeader>
              <RowAction className="button" role="button">
                <img alt="Next Frame" src={NavigateAfter} onClick={() => setFrame(frame + 1)} />
              </RowAction>
            </Wrapper>
          </div>
          <RowHeader>GAME CODE: <GameCode>000fff</GameCode></RowHeader>
        </Wrapper>
      </Row>

      <Board/>
    </>
  )
}