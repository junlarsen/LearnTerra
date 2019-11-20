import styled from 'styled-components'

export const BoardWrapper = styled.div`
  background-color: #c1d5e0;
  height: calc(100vh - 64px - 48px);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const GameBoard = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CardBox = styled.div`
  max-width: calc(16.667% - 3rem);
  max-height: calc(100% - 3rem);
  background: ${props => props.theme.color.light};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  margin: 1.5rem;
`

export const CardImage = styled.img`
  margin: 0.5rem 0.5rem 0 0.5rem;
  max-width:100%;
  max-height:100%;
`

export const StatBoxes = styled.div`
  border-top: 2px solid #f5f5f5;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-overflow: ellipsis;
  height: 32px;
`

export const StatBox = styled.div`
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  width: 33.333%;
  color: ${props => props.theme.color.text};
  font-weight: bold;
  
  &.red { background: #d32f2f; }
  &.blue { background: #1976d2 }
  &.orange { background: #ffa000 }
`

export const CardDescription = styled.span`
  margin: 0 0.5rem;
  text-align: center;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.2rem;
  color: ${props => props.theme.color.text};
`

export const BoardRow = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  
  &.dark {
    background: #f9f9f9;
  }
  
  &.light {
    background: #f2f2f2;
  }
`