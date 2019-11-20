import styled from 'styled-components'

export const BoardWrapper = styled.div`
  background-color: #c1d5e0;
  height: calc(100vh - 64px - 48px);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const InfoBox = styled.div`
  width: 10vw;
`

export const GameBoard = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Card = styled.div`
  width: calc(16.667% - 3rem);
  height: calc(100% - 3rem);
  background: ${props => props.theme.color.light};
  
  margin: 1.5rem;
`

export const BoardRow = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  
  &.dark {
    background: ${props => props.theme.color.dark};
  }
  
  &.light {
    background: ${props => props.theme.color.primary};
  }
`