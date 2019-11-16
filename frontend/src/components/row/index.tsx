import React, { HTMLAttributes } from 'react'
import { Wrapper, Title, Icon, NormalButton } from './styles'

export function Row({ color, children }: React.PropsWithChildren<{ color: string }>): JSX.Element {
  return (
    <Wrapper color={color}>{children}</Wrapper>
  )
}

export function RowHeader({ children }: React.PropsWithChildren<{}> & HTMLAttributes<{}>): JSX.Element {
  return (
    <Title>{children}</Title>
  )
}

export function RowAction({ children }: React.PropsWithChildren<{}> & HTMLAttributes<{}>): JSX.Element {
  return (
    <NormalButton>
      <Icon>{children}</Icon>
    </NormalButton>
  )
}
