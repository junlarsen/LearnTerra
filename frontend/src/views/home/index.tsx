import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from '../../redux'
import { Navbar, NavText } from '../../components/navbar'
import { Sidebar } from '../../components/sidebar'
import { Frame } from '../../components/frame'
import { Theme } from '../../theme'
import * as app from './styles'

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Navbar>
          <NavText title={'SECRET PROJECT'}/>
        </Navbar>
        <div>
          <app.application>
            <app.board>
              <Frame/>
            </app.board>
            <app.sidebar>
              <Sidebar/>
            </app.sidebar>
          </app.application>
        </div>
      </ThemeProvider>
    </Provider>
  )
}