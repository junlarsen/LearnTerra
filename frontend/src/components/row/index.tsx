import React, { PropsWithChildren, HTMLAttributes } from 'react'
import { Wrapper, Title, Icon, NormalButton } from './styles'
import { connect, DispatchProp } from 'react-redux'

export function Row({ color, children }: PropsWithChildren<{ color: string }>): JSX.Element {
  return (
    <Wrapper color={color}>{children}</Wrapper>
  )
}

export function RowHeader({ children }: PropsWithChildren<{}> & HTMLAttributes<{}>): JSX.Element {
  return (
    <Title>{children}</Title>
  )
}

export function RowActionComponent({ children, handler, dispatch }: PropsWithChildren<{ handler: (dispatch: Function) => void }> & HTMLAttributes<{}> & DispatchProp): JSX.Element {
  return (
    <NormalButton onClick={() => handler(dispatch)}>
      <Icon>{children}</Icon>
    </NormalButton>
  )
}

export const RowAction = connect()(RowActionComponent)