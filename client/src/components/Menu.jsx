import React from 'react'
import styled from 'styled-components'
import SallyTube from '../img/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from 'react-router-dom';

const Container = styled.div `
  flex: 1;
  background-color: ${({theme}) => theme.bg};
  height: 100vh;
  color: ${({theme}) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`

const Wrapper = styled.div `
  padding: 18px 26px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({theme}) => theme.soft};
  }
`

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme}) => theme.soft};
`

const Login = styled.div``

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" , color: "inherit"}}>
          <Logo>
            <Img src={SallyTube} />
            SallyTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          홈
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          구독
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          보관함
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          시청 기록
        </Item>
        <Hr />
        <Login>
          로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.
          <Link to="signin" style={{textDecoration:"none"}}>
            <Button>
              <AccountCircleOutlinedIcon />
              로그인
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>Best of sallytube</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          음악
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          스포츠
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          게임
        </Item>
        <Item>
          <MovieOutlinedIcon />
          영화
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          뉴스
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          실시간
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          설정
        </Item>
        <Item>
          <FlagOutlinedIcon />
          신고 기록
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          고객센터
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "밝은" : "어두운"} 모드
        </Item>
      </Wrapper>
    </Container>)
}

export default Menu
