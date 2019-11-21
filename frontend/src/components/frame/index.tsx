import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useSelector } from 'react-redux'

import { Wrapper, GameCode } from './styles'
import { Row, RowHeader, RowAction } from '../row'
import { Board } from '../board'
import { setFrame } from '../../redux/actions'

import NavigateBefore from '../../assets/navigate-before.svg'
import NavigateAfter from '../../assets/navigate-next.svg'

export function Frame() {
  const theme = useContext(ThemeContext)
  const { limit, frame, id } = useSelector((state: any) => state.app)

  return (
    <>
      <Row color={theme.color.light}>
        <Wrapper>
          <RowHeader>MATCH EVENTS</RowHeader>
          <div>
            <Wrapper className="controls">
              <RowAction className="button" role="button" handler={(h: Function) => h(setFrame(frame - 1))}>
                <img alt="Previous Event" title="Previous Event" src={NavigateBefore}/>
              </RowAction>
              <RowHeader>{frame}/{limit}</RowHeader>
              <RowAction className="button" role="button" handler={(h: Function) => h(setFrame(frame + 1))}>
                <img alt="Next Event" title="Next Event" src={NavigateAfter}/>
              </RowAction>
            </Wrapper>
          </div>
          <RowHeader>GAME CODE: <GameCode>{id || '000000'}</GameCode></RowHeader>
        </Wrapper>
      </Row>

      <Board/>
    </>
  )
}
