import styled from 'styled-components'

export const Content = styled.div`
  height: calc(100vh - 64px);
  background: ${props => props.theme.color.dark};
`

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Annotations = styled.div`
  height: calc(100vh - 220px - 48px - 96px - 152px); /* 100 vh - comment box - row - navbar - health boxes */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const Healthbar = styled.div`
  background: #5ceb52;
  height: 12px;
  width: calc((100% / 20) * ${(props: any) => props.health});
`

export const BasicBar = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${props => props.theme.color.light};
`

export const HealthBlock = styled.div`
  padding: 16px;
  height: 44px;
  background-color: ${props => props.theme.color.secondary};
  display: flex;
  flex-direction: column;
`

export const HealthUsername = styled.span`
  margin: 8px 0;
  font-family: "Roboto Mono", sans-serif;
  color: ${props => props.theme.color.text};
  font-size: 1.1rem;
`

export const CommentBox = styled.div`
  padding: 16px;
  height: calc(220px - 48px);
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