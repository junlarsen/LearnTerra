import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  
  &.controls {
    min-width: 148px;
  }
`

export const SubItem = styled.div`
  width: 33.3333%;
  
  &.center {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

export const GameCode = styled.span`
  color:  rgba(6, 38, 154, 0.55);
`