import React from 'react'
import { Wrapper } from './styles'

export function Row({ color, children }: React.PropsWithChildren<{ color: string }>): JSX.Element {
    return (
        <Wrapper color={color}>{children}</Wrapper>
    )
}