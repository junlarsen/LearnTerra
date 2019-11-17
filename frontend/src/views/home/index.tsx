import React, { PropsWithChildren, useState } from 'react'
import { Navbar, NavText } from '../../components/navbar'
import { Sidebar } from '../../components/sidebar'
import { Frame } from '../../components/frame'
import { Loader } from '../../components/loading'
import { SidebarWrapper, BoardWrapper, Application } from './styles'
import { setFrame, setFrameLimit, setGame } from '../../redux/actions'
import { connect, DispatchProp } from 'react-redux'
import { useParams } from 'react-router'

// mock backend api call
// this will set redux state when a response from backend
// has been recieved. will return whether the backend gave
// valid game or not.
async function mockAPI(): Promise<boolean> {
  return new Promise(res => {
    setTimeout(() => res(true), 1000)
  })
}

function MainComponent({ dispatch }: PropsWithChildren<{}> & DispatchProp): JSX.Element {
  // This is safe because this component will not render if this is not set
  const { game } = useParams()

  dispatch(setGame(game!))
  dispatch(setFrameLimit(100))
  dispatch(setFrame(1))

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
const Main = connect()(MainComponent)

export function Home(): JSX.Element {
  const [loaded, setLoaded] = useState(false)

  mockAPI().then(res => setLoaded(res))

  return (
    <>
      {!loaded && <Loader />}
      {loaded && <Main />}
    </>
  )
}