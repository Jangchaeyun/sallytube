import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginStart, loginFailure, loginSuccess } from '../redux/userSlice'
import { auth, provider } from "../firebase"
import { signInWithPopup } from "firebase/auth"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`

const Title = styled.h1`
  font-size: 24px;
`

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
`

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 10px;
  color: ${({ theme }) => theme.textSoft};
`

const Links = styled.div`
  margin-left: 50px;
`

const Link = styled.span`
  margin-left: 30px;
`

const SignIn = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart())
    try {
      const res = await axios.post("/auth/signin", { email, password })
      dispatch(loginSuccess(res.data))
    } catch (err) {
      dispatch(loginFailure())
    }
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    })
    .catch((error) => {})
  }
  return (
    <Container>
      <Wrapper>
        <Title>로그인</Title>
        <SubTitle>sallytube를 계속하려면</SubTitle>
        <Input placeholder="이메일" onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}/>
        <Button onClick={handleLogin}>로그인</Button>
        <Title>또는</Title>
        <Button onClick={signInWithGoogle}>구글로 로그인</Button>
        <Title>또는</Title>
        <Input placeholder="사용자 이름" onChange={(e) => setName(e.target.value)}/>
        <Input placeholder="이메일" onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}/>
        <Button>회원가입</Button>
      </Wrapper>
      <More>
        한국(KR)
        <Links>
          <Link>도움</Link>
          <Link>개인정보 보호</Link>
          <Link>이용약관</Link>
        </Links>
      </More>
    </Container>
  )
}

export default SignIn