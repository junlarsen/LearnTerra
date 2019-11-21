import React, { PropsWithChildren, HTMLAttributes } from 'react'
import { Wrapper, Title, Icon, NormalButton } from './styles'
import { connect, DispatchProp } from 'react-redux'

export function Row({ className, color, children }: PropsWithChildren<{ color: string, className: string }>): JSX.Element {
  return (
    <Wrapper className={className} color={color}>{children}</Wrapper>
  )
}

Row.defaultProps = {
  className: ''
}

export function RowHeader({ children }: PropsWithChildren<{}> & HTMLAttributes<{}>): JSX.Element {
  return (
    <Title>{children}</Title>
  )
}

export function RowActionComponent({ children, handler, dispatch, disable }: PropsWithChildren<{ disable: boolean, handler: (dispatch: Function) => void }> & HTMLAttributes<{}> & DispatchProp): JSX.Element {
  return (
    <NormalButton disabled={disable} onClick={() => handler(dispatch)}>
      <Icon>{children}</Icon>
    </NormalButton>
  )
}

export const RowAction = connect()(RowActionComponent)