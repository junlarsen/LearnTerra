import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../redux'
import { Navbar, NavText } from '../../components/navbar'
import { Sidebar } from '../../components/sidebar'
import * as app from './styles'
import { Row } from '../../components/row'
import { Frame } from '../../components/frame'

export function App() {
    return (
        <Provider store={store}>
            <Navbar>
                <NavText title={"SECRET PROJECT"} />
            </Navbar>
            <div>
                <app.application>
                    <app.board>
                        <Frame />
                    </app.board>
                    <app.sidebar>
                        <Sidebar />
                    </app.sidebar>
                </app.application>
            </div>
        </Provider>
    )
}