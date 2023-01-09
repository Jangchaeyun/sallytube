import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div`
     
`

const NewComment = styled.div`
     display: flex;
     align-items: center;
     gap: 10px;
`

const Avatar = styled.img`
     width: 50px;
     height: 50px;
     border-radius: 50%;
`

const Input = styled.input`
     border: none;
     border-bottom: 1px solid ${({ theme }) => theme.soft};
     background-color: transparent;
     outline: none;
     padding: 5px;
     width: 200px;
`

const Comments = () => {
  return (
    <Container>
      <NewComment>
          <Avatar src='https://cdn.crowdpic.net/list-thumb/thumb_l_4291713E6EC8D22461618B2107D30880.jpg'/>
          <Input placeholder='댓글을 추가하세요'/>
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  )
}

export default Comments
