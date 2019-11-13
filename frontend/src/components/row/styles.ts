import styled from 'styled-components'

export const container = styled.div`
  height: 48px;
  width: 100%;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.25);
  background: ${props => props.color};
`