import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { store } from './redux'
import { Theme } from './theme'

import { Home, Welcome } from './views/home'

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>

            <Route path="/:game">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}
