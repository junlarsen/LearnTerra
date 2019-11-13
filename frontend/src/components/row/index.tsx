import React from 'react'
import * as app from './styles'

export function Row({ color, children }: React.PropsWithChildren<{ color: string }>) {
    return (
        <app.container color={color}>{children}</app.container>
    )
}