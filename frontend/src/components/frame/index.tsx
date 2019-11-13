import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Row } from '../row'

export function Frame() {
    const theme = useContext(ThemeContext)

    return (
        <Row color={theme.color.accent} />
    )
}