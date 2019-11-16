import React, { useState } from 'react'
import { Navbar, NavText } from '../../components/navbar'
import { Sidebar } from '../../components/sidebar'
import { Frame } from '../../components/frame'
import { Loader } from '../../components/loading'
import { SidebarWrapper, BoardWrapper, Application } from './styles'

// mock backend api call
// this will set redux state when a response from backend
// has been recieved. will return whether the backend gave
// valid game or not.
async function mockAPI(): Promise<boolean> {
  return new Promise(res => {
    setTimeout(() => res(true), 1000)
  })
}

export function Home(): JSX.Element {
  const [loaded, setLoaded] = useState(false)

  mockAPI().then(res => setLoaded(res))

  return (
    <>
      {!loaded && <Loader/>}
      {loaded && <MainApp />}
    </>
  )
}

function MainApp(): JSX.Element {
  return (
    <>
      <Navbar>
        <NavText title="SECRET PROJECT"/>
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