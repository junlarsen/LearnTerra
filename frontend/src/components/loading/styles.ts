import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.color.dark};
  
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.color.text};
  font-family: "Roboto Mono", sans-serif;
`