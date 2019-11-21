import React, { FormEvent, PropsWithChildren, useState } from 'react'
import { Navbar, NavText } from '../../components/navbar'
import { Sidebar } from '../../components/sidebar'
import { Frame } from '../../components/frame'
import { Loader, Canvas, CanvasTitle, CanvasText } from '../../components/loading'
import { SidebarWrapper, BoardWrapper, Application, GameCode, Form, Input, Container, Button, Anchor } from './styles'
import { setComments, setFrame, setFrameLimit, setFrames, setGame } from '../../redux/actions'
import { store } from '../../redux'
import { useParams, withRouter, RouteComponentProps } from 'react-router'
import { GameSchema } from '../../../../backend/src/schema'

// temporary api endpoint
export const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://supergrecko.com/api/v1' || 'http://localhost:8001/api/v1'

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

  const json = await res.json() as GameSchema

  store.dispatch(setFrameLimit(json.frameCount))
  store.dispatch(setFrame(1))
  store.dispatch(setGame(json.gameId))
  store.dispatch(setFrames(json.game))
  store.dispatch(setComments(json.annotations))

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
        <NavText title="LEARNTERRA"/>
      </Navbar>
      <div>
        <Application>
          <BoardWrapper>
            <Frame/>
          </BoardWrapper>
          <SidebarWrapper>
            <Sidebar/>
          </SidebarWrapper>
        </Application>
      </div>
    </>
  )
}

function WelcomeComponent({ history }: PropsWithChildren<{}> & RouteComponentProps) {
  let value: string = ''

  return (
    <Canvas>
      <div>
        <Container>
          <CanvasTitle>LEARNTERRA</CanvasTitle>
          <CanvasText>A Legends of Runeterra replay engine</CanvasText>
        </Container>

        <Container>
          <Form onSubmit={(event) => {
            event.preventDefault()

            history.push(`/${encodeURIComponent(value)}`)
          }}>
            <Input required onChange={(event) => {
              value = event.target.value
            }} placeholder="Search for a game.."/>

            <Button type="submit">Search</Button>
          </Form>
        </Container>
      </div>
    </Canvas>
  )
}

export const Welcome = withRouter(WelcomeComponent)

function Errored() {
  const { game } = useParams()

  return (
    <Canvas>
      <div>
        <Container>
          <CanvasTitle>Game "<GameCode>{game! || '<none>'}</GameCode>" not found</CanvasTitle>
        </Container>

        <Container className="left">
          <Anchor href="/">
            Go back home
          </Anchor>
        </Container>
      </div>
    </Canvas>
  )
}

export function Home(): JSX.Element {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(true)
  const { game } = useParams()

  once('fetch data from api', () => {
    call(game!).then(res => {
      setLoaded(true)
      setError(!res)
    })
  })

  return (
    <>
      {!loaded && <Loader/>}
      {loaded && !error && <Main/>}
      {loaded && error && <Errored/>}
    </>
  )
}