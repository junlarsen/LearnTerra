import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  
  &.controls {
    min-width: 148px;
  }
`

export const GameCode = styled.span`
  color:  rgba(6, 38, 154, 0.55);
`