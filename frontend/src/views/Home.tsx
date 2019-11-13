import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux'
import { Navbar, NavText } from '../components/navbar'

export function App() {
    return (
        <Provider store={store}>
            <Navbar>
                <NavText title={"SECRET PROJECT"} />
            </Navbar>
        </Provider>
    )
}