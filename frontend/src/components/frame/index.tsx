import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { useParams } from 'react-router-dom'

import { Wrapper, GameCode } from './styles'
import { Row, RowHeader, RowAction } from '../row'
import { Board } from '../board'

import NavigateBefore from '../../assets/navigate-before.svg'
import NavigateAfter from '../../assets/navigate-next.svg'

export function Frame() {
  const theme = useContext(ThemeContext)
  const [frame, setFrame] = useState(0)
  const { game } = useParams()

  return (
    <>
      <Row color={theme.color.light}>
        <Wrapper>
          <RowHeader>MATCH FRAMES</RowHeader>
          <div>
            <Wrapper className="controls">
              <RowAction className="button" role="button" handler={() => setFrame(frame - 1)}>
                <img alt="Previous Frame" src={NavigateBefore} />
              </RowAction>
              <RowHeader>{frame}/0</RowHeader>
              <RowAction className="button" role="button" handler={() => setFrame(frame + 1)}>
                <img alt="Next Frame" src={NavigateAfter} />
              </RowAction>
            </Wrapper>
          </div>
          <RowHeader>GAME CODE: <GameCode>{game || "000000"}</GameCode></RowHeader>
        </Wrapper>
      </Row>

      <Board/>
    </>
  )
}