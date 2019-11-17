import styled from 'styled-components'
import { NormalButton } from '../../components/row/styles'

export const Application = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 64px;
`

export const SidebarWrapper = styled.div`
  width: 20vw;
`

export const BoardWrapper = styled.div`
  width: 80vw;
`

export const GameCode = styled.span`
  color: ${props => props.theme.color.light};
`

export const Form = styled.form`
  text-align: left;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  margin: 6rem 0;
  
  &.left {
    text-align: left;
  }
`

export const Input = styled.input`
  padding: 0.5rem;
  border-width: 0;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  margin: 0.2rem 0;
`

export const Button = styled(NormalButton)`
  margin: 0.2rem 0;
  padding: 0.75rem;
  border-radius: 5px;
  font-size: 1.33rem;
  font-family: "Roboto", sans-serif;
  background-color: #4caf50;
`

export const Anchor = styled.a`
  text-align: left;
  text-decoration: none;
  color: ${props => props.theme.color.text};
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  
  border-bottom: 3px solid ${props => props.theme.color.light};
`