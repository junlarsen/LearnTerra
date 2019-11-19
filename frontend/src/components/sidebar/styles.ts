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
  height: calc(100vh - 220px - 48px - 64px); /* 100 vh - comment box - row - navbar */
`

export const CommentBox = styled.div`
  padding: 16px;
  height: 220px;
  background-color: ${props => props.theme.color.light};
`
