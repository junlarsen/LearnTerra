import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Row, RowHeader } from '../row'
import { Content, AnnotationWrapper, Annotations, CommentBox } from './styles'
import { GameCode, Button, Form, Textarea } from '../../views/home/styles'
import { BASE_URL } from '../../views/home'
import { useSelector } from 'react-redux'

export function Sidebar() {
  const theme = useContext(ThemeContext)
  let value: string = ""

  const { frame } = useSelector((state: any) => state.app)

  return (
    <Content>
      <Row color={theme.color.dark}>
        <RowHeader>MATCH TIMELINE</RowHeader>
      </Row>

      <AnnotationWrapper>
        <Annotations>One</Annotations>
        <CommentBox>
          <Form onSubmit={async (event) => {
            event.preventDefault()

            // TODO: call backend
            await /* fetch() */ void 0

            window.location.reload()
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