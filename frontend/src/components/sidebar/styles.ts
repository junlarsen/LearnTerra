import styled from 'styled-components'

export const Content = styled.div`
  height: calc(100vh - 64px);
  background: ${props => props.theme.color.dark};
`

export const AnnotationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Annotations = styled.div`
  height: calc(100vh - 220px - 48px - 96px); /* 100 vh - comment box - row - navbar */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const CommentBox = styled.div`
  padding: 16px;
  height: 220px;
  background-color: ${props => props.theme.color.light};
`

export const CommentTitle = styled.span`
  font-family: "Roboto Mono", sans-serif;
  color: aqua;
  font-size: 1.5rem;
`

export const CommentText = styled.p`
  font-family: "Roboto", sans-serif;
  color: ${props => props.theme.color.text};
`

export const Comment = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.color.text};
`

export const CommentHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`