import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Row, RowHeader } from '../row'
import { Content, AnnotationWrapper, Annotations, CommentBox } from './styles'
import { Button, Form, Textarea } from '../../views/home/styles'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../../views/home'
import { Annotation } from '../../../../backend/src/schema'
import { addComment } from '../../redux/actions'
import { store } from '../../redux'

export function Sidebar() {
  const theme = useContext(ThemeContext)
  let value: string = ""

  const { frame, id, comments } = useSelector((state: any) => state.app)

  return (
    <Content>
      <Row color={theme.color.dark}>
        <RowHeader>MATCH TIMELINE</RowHeader>
      </Row>

      <AnnotationWrapper>
        <Annotations>
          {comments.map((e: Annotation) => e.text)}
        </Annotations>
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
            }} />

            <Button type="submit" style={{ color: '#f5f5f5' }}>Submit Comment</Button>
          </Form>
        </CommentBox>
      </AnnotationWrapper>
    </Content>
  )
}