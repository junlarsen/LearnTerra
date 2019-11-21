import styled from 'styled-components'

export const BoardWrapper = styled.div`
  background-color: #c1d5e0;
  height: calc(100vh - 64px - 48px);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const GameBoard = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/board.png');
  width: 100%;
`

export const CardBox = styled.div`
  max-width: calc(16.667% - 1.5rem);
  max-height: calc(100% - 1.5rem - .25rem);
  background: ${props => props.theme.color.light};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  margin: 0.75rem 0.75rem 0 0.75rem;
  box-shadow: 0 8.5px 19px rgba(0, 0, 0, 0.3), 0 7.5px 6px rgba(0, 0, 0, 0.22);
`

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const StatBoxes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-overflow: ellipsis;
  height: 32px;
`

export const Overlay = styled.div`
  position: fixed;
  top: calc(64px + 48px);
  left: 0;
  width: calc(100% - 20vw);
  height: calc(100% - 64px - 48px);
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  
  &.hidden {
    display: none;
  }
`

export const OverlayTitle = styled.span`
  font-size: 10rem;
  color: ${props => props.theme.color.text};
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`

export const OverlayText = styled.span`
  margin: 1rem 0;
  font-size: 3rem;
  color: ${props => props.theme.color.light};
  font-family: "Roboto", sans-serif;
`

export const StatBox = styled.div`
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  width: 50%;
  color: ${props => props.theme.color.text};
  font-family: "Roboto Mono", sans-serif;
  font-weight: bold;
  font-size: x-large;
  
  &.red {
    background: #7b0000;
    background: linear-gradient(180deg, rgba(165,19,35,1) 0%, rgba(121,1,2,1) 100%);
  }
  
  &.orange { 
    background: #dd6b00;
    background: linear-gradient(180deg, rgba(253,137,0,1) 0%, rgba(193,90,0,1) 100%);
  }
  
  &.higherStat { color: #00ff00; }
  &.lowerStat { color: #ff0000; }
`

export const CardTitle = styled.span`
  margin: 0 0.5rem;
  font-family: "Roboto Mono", sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
  color: ${props => props.theme.color.text};
  font-weight: bold;
`

export const CardDescription = styled.span`
  margin: 0 0.5rem;
  overflow-y: scroll;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  line-height: 1rem;
  color: ${props => props.theme.color.text};
  
  ::-webkit-scrollbar {
    width: 0;
  }
`

export const BoardRow = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  background: transparent;
`