import React, { PropsWithChildren, useContext} from 'react'
import { ThemeContext } from 'styled-components'
import { Row, RowHeader } from '../row'
import {
  Content,
  SidebarWrapper,
  Annotations,
  CommentBox,
  Comment,
  CommentHeaderBox,
  CommentText,
  CommentTitle,
  HealthBlock,
  HealthUsername,
  Healthbar,
  BasicBar
} from './styles'
import { Button, Form, Textarea } from '../../views/home/styles'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../../views/home'
import { Annotation } from '../../../../backend/src/schema'
import { addComment } from '../../redux/actions'
import { store } from '../../redux'

function HealthbarComponent({ health }: PropsWithChildren<{ health: number }>): JSX.Element {
  return (
    <>
      <BasicBar>
        {/*
        // @ts-ignore */}
        <Healthbar health={health}/>
      </BasicBar>
    </>
  )
}

function HealthWidget({ username, health }: PropsWithChildren<{ username: string, health: number }>):
  JSX.Element {
  return (
    <HealthBlock>
      <CommentHeaderBox>
        <HealthUsername>{username}</HealthUsername>
        <HealthUsername>{Math.max(health || 0, 0)}/20</HealthUsername>
      </CommentHeaderBox>

      <HealthbarComponent health={Math.max(health || 0, 0)}/>
    </HealthBlock>
  )
}

export function Sidebar() {
  const mapAnnotations = (annotations: Array<Annotation>): Array<JSX.Element> => {
    const sorted = annotations.sort((a, b) => a.frame - b.frame)

    return sorted.map(comment => {
      return (
        <Comment>
          <CommentHeaderBox>
            <CommentTitle>Frame {comment.frame}</CommentTitle>
            <CommentTitle>{new Date(comment.date).toLocaleDateString()}</CommentTitle>
          </CommentHeaderBox>
          <CommentText>{comment.text}</CommentText>
        </Comment>
      )
    })
  }

  const theme = useContext(ThemeContext)
  let value: string = ''

  const { frame, id, comments } = useSelector((state: any) => state.app)
  const frames = useSelector((state: any) => state.app.frames)
  const current = frames[frame - 1]

  return (
    <Content>
      <Row className="absolute" color={theme.color.secondary}>
        <RowHeader>PLAYERS</RowHeader>
      </Row>

      <SidebarWrapper>
        <div style={{ 'margin': '48px 0 0 0' }}>
          <HealthWidget username="Opponent" health={current.OpponentHealth}/>
          <HealthWidget username="Player" health={current.UserHealth}/>
        </div>
      </SidebarWrapper>

      <Row color={theme.color.dark}>
        <RowHeader>MATCH TIMELINE</RowHeader>
      </Row>

      <SidebarWrapper>
        <Annotations children={mapAnnotations(comments)}/>
        <CommentBox>
          <Form onSubmit={async (event) => {
            event.preventDefault()

            // @ts-ignore reset form fields
            event.target.reset()

            store.dispatch(addComment({
              date: Date.now(),
              text: value,
              frame: frame
            }))

            await fetch(`${BASE_URL}/annotations/${id}/${frame}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                text: value,
                frame: frame
              })
            })
          }}>
            <Textarea placeholder={`Leave a comment for frame #${frame}..`} required rows={5} onChange={(event) => {
              value = event.target.value
            }}/>

            <Button type="submit" style={{ color: '#f5f5f5' }}>Submit Comment</Button>
          </Form>
        </CommentBox>
      </SidebarWrapper>
    </Content>
  )
}