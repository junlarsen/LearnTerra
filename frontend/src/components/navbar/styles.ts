import styled from 'styled-components'

export const container = styled.div`
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

export const block = styled.div`
  height: 100%;
  font-size: 3rem;
  line-height: 1;
  margin: 8px 8px;
  font-family: "Roboto Mono", sans-serif;
`