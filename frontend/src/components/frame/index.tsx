import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { useSelector } from 'react-redux'

import { Wrapper, GameCode } from './styles'
import { Row, RowHeader, RowAction } from '../row'
import { Board } from '../board'
import { setFrame, setPlaying } from '../../redux/actions'

import NavigateBefore from '../../assets/navigate-before.svg'
import NavigateAfter from '../../assets/navigate-next.svg'
import Play from '../../assets/play.svg'
import Pause from '../../assets/pause.svg'
import { store } from '../../redux'

export function Frame() {
  const theme = useContext(ThemeContext)
  const { limit, frame, id, playing } = useSelector((state: any) => state.app)

  useEffect(() => {
    if (playing) {
      setTimeout(() => {
        store.dispatch(setFrame(frame + 1))
      }, 500)
    }
  })

  return (
    <>
      <Row color={theme.color.light}>
        <Wrapper>
          <RowHeader>
            <span>MATCH EVENTS{' '}</span>
            <GameCode>({frame}/{limit})</GameCode>
          </RowHeader>
          <div>
            <Wrapper className="controls">
              <RowAction disable={playing} className="button" role="button" handler={(h: Function) => h(setFrame(frame - 1))}>
                <img alt="Previous Event" title="Previous Event" src={NavigateBefore}/>
              </RowAction>
              {playing && <RowAction disable={false} className="button" role="button" handler={(h: Function) => {
                h(setPlaying(false))
              }}>
                <img alt="Pause Autoplay" title="Pause Autoplay" src={Pause}/>
              </RowAction>}

              {!playing && <RowAction disable={false} className="button" role="button" handler={(h: Function) => {
                h(setPlaying(true))
              }}>
                <img alt="Start Autoplay" title="Start Autoplay" src={Play}/>
              </RowAction>}
              <RowAction disable={playing} className="button" role="button" handler={(h: Function) => h(setFrame(frame + 1))}>
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
