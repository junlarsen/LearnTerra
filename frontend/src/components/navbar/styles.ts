import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 64px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  background: ${props => props.theme.color.primary};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: absolute;
  top: 0;
  left: 0;
`

export const Block = styled.a`
  height: 100%;
  font-size: 3rem;
  line-height: 1;
  margin: 8px 16px;
  text-decoration: none;
  font-family: "Roboto Mono", sans-serif;
  color: ${props => props.theme.color.text};
`