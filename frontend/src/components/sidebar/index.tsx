import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Row } from '../row'
import * as app from './styles'

export function Sidebar() {
  const theme = useContext(ThemeContext)

  return (
    <app.content>
      <Row color={theme.color.secondary}/>
    </app.content>
  )
}