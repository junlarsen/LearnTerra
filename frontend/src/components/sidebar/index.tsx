import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Row } from '../row'
import { Content } from './styles'

export function Sidebar() {
  const theme = useContext(ThemeContext)

  return (
    <Content>
      <Row color={theme.color.secondary}/>
    </Content>
  )
}