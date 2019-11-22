import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 48px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background: ${props => props.color};
  
  &.absolute {
    position: absolute;
  }
`

export const Title = styled.span`
  height: 100%;
  font-size: 1.5rem;
  line-height: 3rem;
  padding: 0 16px;
  font-family: "Roboto Mono", sans-serif;
  white-space: nowrap;
  color: ${props => props.theme.color.text};
`

export const Icon = styled.div`
  height: 100%;
  padding: 8px;
  line-height: 1rem;
  cursor: pointer;
`

export const NormalButton = styled.button`
  border: none;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select:none;
    
  &:disabled {
    cursor:not-allowed;
  }
`