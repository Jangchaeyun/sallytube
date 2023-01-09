import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
  display: flex;
  gap: 24px;
`

const Content = styled.div`
  flex: 5;
`
const VideoWrapper = styled.div`
  flex: 5;
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.text};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) =>  theme.soft};
`

const Recommendation = styled.div`
  flex: 2;
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`

const ChannelName = styled.span`
  font-weight: 500;
`

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`

const Description = styled.p`
  font-size: 14px;
`
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/A-0Q0kBB5H0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>미미일소흔경성 7,8,9회</Title>
        <Details>
          <Info>조회수 72만회 · 4년전</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> 싫어요
            </Button>
            <Button>
              <ReplyOutlinedIcon /> 공유
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> 오프라인 저장
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src='https://yt3.googleusercontent.com/ytc/AMLnZu8-IjE5bsn90NUm8sfcQgLtfbfQgBAzcnFEKA=s88-c-k-c0x00ffffff-no-rj' />
            <ChannelDetail>
              <ChannelName>이다인</ChannelName>
              <ChannelCounter>536 구독</ChannelCounter>
              <Description>
                경대 컴퓨터학과에 재학 중인 학과 미모 1위 '미미'와 경대 최고의 미남 '초내'의 사랑 이야기이다. 중국 온라인 게임 플레이에 빠진 '미미'가 피시방에서 게임하는 모습을 '초내'라는 우연히 보고 첫눈에 반하게 된다. 게임 서버 1위에 빛나는 초내는 그렇게 '소니 하'라는 자신의 게임 캐릭터로 '미미'에게 다가간다. '미미'는 모두가 동경하는 대학교 선배 '초내'가 '일소 내하'라는 사실을 모르고 게임 속에서 '일소 내하'와 사랑에 빠지게 된다. '미미'는 게임 속에서 '초내'와 결혼을 하게 되고 '초내' 친구들과도 친분을 쌓아간다. 그 후 '초내'가 자신의 번호를 알리고 '미미'와 오프라인에서 제대로 만나게 된다. '미미'는 자신이 좋아하던 '일소 내하'가'초내' 선배였다는 사실에 매우 놀라게 되고 둘은 경대 최고의 커플이 된다.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  )
}

export default Video
