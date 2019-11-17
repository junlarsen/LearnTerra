import React, { useState } from 'react'
import { Navbar, NavText } from '../../components/navbar'
import { Sidebar } from '../../components/sidebar'
import { Frame } from '../../components/frame'
import { Loader } from '../../components/loading'
import { SidebarWrapper, BoardWrapper, Application } from './styles'
import { setFrame, setFrameLimit, setGame } from '../../redux/actions'
import { store } from '../../redux'
import { useParams } from 'react-router'

// temporary api endpoint
export const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://supergrecko.com/api/v1'

async function call(game: string): Promise<boolean> {
  const res = await fetch(`${BASE_URL}/game/${game}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    return false
  }

  const json = await res.json()

  store.dispatch(setFrameLimit(json.frameCount))
  store.dispatch(setFrame(1))
  store.dispatch(setGame(json.gameId))

  return true
}

const events: Array<string> = []
function once(event: string, callback: () => void) {
  if (events.includes(event)) {
    return
  }

  callback()
  events.push(event)
}

function Main(): JSX.Element {
  return (
    <>
      <Navbar>
        <NavText title="SECRET PROJECT"/>
      </Navbar>
      <div>
        <Application>
          <BoardWrapper>
            <Frame />
          </BoardWrapper>
          <SidebarWrapper>
            <Sidebar />
          </SidebarWrapper>
        </Application>
      </div>
    </>
  )
}

export function Home(): JSX.Element {
  const [loaded, setLoaded] = useState(false)
  const { game } = useParams()

  once('fetch data from api', () => {
    call(game!).then(res => {
      setLoaded(res)
    })
  })

  return (
    <>
      {!loaded && <Loader />}
      {loaded && <Main />}
    </>
  )
}