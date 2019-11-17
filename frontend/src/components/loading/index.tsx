import React, { PropsWithChildren } from 'react'

import { Container, Title, Text } from './styles'

export function Loader(): JSX.Element {
  return (
    <Container>
      <div>
        <div className="loadingio-spinner-rolling-6l1dyob45vf">
          <div className="ldio-x7cqyqdxgq">
            <div />
          </div>
        </div>

        <Title>LOADING APPLICATION</Title>
      </div>
    </Container>
  )
}

export function Canvas({ children }: PropsWithChildren<{}>) {
  return (
    <Container>{children}</Container>
  )
}

export function CanvasTitle({ children }: PropsWithChildren<{}>) {
  return (
    <Title>{children}</Title>
  )
}

export function CanvasText({ children }: PropsWithChildren<{}>) {
  return (
    <Text>{children}</Text>
  )
}