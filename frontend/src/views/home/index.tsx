import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from '../../redux'
import { Navbar, NavText } from '../../components/navbar'
import { Sidebar } from '../../components/sidebar'
import { Frame } from '../../components/frame'
import { Theme } from '../../theme'
import { SidebarWrapper, BoardWrapper, Application } from './styles'

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Navbar>
          <NavText title={'SECRET PROJECT'}/>
        </Navbar>
        <div>
          <Application>
            <BoardWrapper>
              <Frame/>
            </BoardWrapper>
            <SidebarWrapper>
              <Sidebar />
            </SidebarWrapper>
          </Application>
        </div>
      </ThemeProvider>
    </Provider>
  )
}