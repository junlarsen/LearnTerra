import React from 'react'
import { Wrapper, Title, Icon } from './styles'

export function Row({ color, children }: React.PropsWithChildren<{ color: string }>): JSX.Element {
  return (
    <Wrapper color={color}>{children}</Wrapper>
  )
}

export function RowHeader({ children }: React.PropsWithChildren<{}>) {
  return (
    <Title>{children}</Title>
  )
}

export function RowIcon({ children }: React.PropsWithChildren<{}>) {
  return (
    <Icon>{children}</Icon>
  )
}
