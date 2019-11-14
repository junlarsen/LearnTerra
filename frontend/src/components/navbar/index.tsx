import React from 'react'
import { Wrapper, Block } from './styles'

// Create a 64px tall bar with a drop shadow
export function Navbar({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

// Create a text item to put inside the navbar
export function NavText({ title }: React.PropsWithChildren<{ title: string }>) {
  return (
    <Block>{title}</Block>
  )
}