import React from 'react'
import * as app from './styles'

// Create a 64px tall bar with a drop shadow
export function Navbar({ children }: React.PropsWithChildren<{}>) {
    return (
        <app.container>{children}</app.container>
    )
}

// Create a text item to put inside the navbar
export function NavText({ title }: React.PropsWithChildren<{ title: string }>) {
    return (
        <app.block>{title}</app.block>
    )
}