import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import styled from 'styled-components';
import Beginning from '../assets/ResultPage/result_beginning.svg';
import { BelowContents } from '../component/ResultPage/BelowContents';

const ResultPage = () => {
  const captureRef = useRef(null);

  const handleCapture = async () => {
    if (!captureRef.current) return;

    const canvas = await html2canvas(captureRef.current);
    const link = document.createElement('a');
    link.download = 'songfornewyear_result.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <Container>
      <CardContainer ref={captureRef}>
        <ResultCardContainer>
          <ResultCard src={Beginning} />
          <TitleContainer>
            <Title>뷁뷁뷁뷁뷁 님의 소원</Title>
          </TitleContainer>
          <WishContainer>
            <Wish>로또 1등 당첨 로또 1등 당첨 로또 1등 당첨 로또 1등 당첨 로또 1등 당첨 로또 1등 당첨</Wish>
          </WishContainer>
          <SongContainer>
            <AlbumCover />
            <SongTextContainer>
              <SongTitle>Do You Hear The People Sing?</SongTitle>
              <SongArtist>이찬혁</SongArtist>
            </SongTextContainer>
          </SongContainer>
          <LyricsContainer>
            <Lyrics>반짝이는 꿈들로 가득 찬 저 세상이
            날  부르고 있잖아 조금 더 가보자</Lyrics>
          </LyricsContainer>
        </ResultCardContainer>
        <SongTime>
          12월 31일 <TimeColor>23시 59분 05초</TimeColor>에 재생 시 이 가사로 한 해를 시작할 수 있어요!
        </SongTime>
      </CardContainer>
      <BelowContents onCapture={handleCapture} />
      <Footer>
        <FooterText>
          @ 2024 Team Malimu
          <br />
          All Rights Reserved
        </FooterText>
      </Footer>
    </Container>
  );
};

export default ResultPage;

const Container = styled.div`
  @media (min-width: 500px) {
    width: 31.25rem; // 500px
    margin: 0 auto;
  }
  width: 100%;
  min-height: 100vh;
  background-color: var(--beige);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardContainer = styled.div`
background: #fffdf1;
  padding-bottom: 2.56rem;
`;

const ResultCardContainer = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 500px) {
    width: 31.25rem; // 500px
  }
  min-width: 360px;
  height: auto;
`;

const ResultCard = styled.img`
  width: 100%;
  height: auto;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 19%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2.5rem 0;
  box-sizing: border-box;
`;

const Title = styled.div`
  text-align: center;
  font-size: clamp(2rem, 1.5rem + 2vw, 3rem);
`;

const WishContainer = styled.div`
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2.5rem 0;
  box-sizing: border-box;
`;

const Wish = styled.div`
  text-align: center;
  font-size: clamp(1.5rem, 1.5rem + 2vw, 4rem);
`;

const SongContainer = styled.div`
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2.5rem 0;
  box-sizing: border-box;
`;

const AlbumCover = styled.img`
  width: clamp(5rem, 5rem + 5vw, 10rem);
  height: clamp(5rem, 5rem + 5vw, 10rem);
  border-radius: 0.625rem;
  background: url(<path-to-image>) #FFE4A4 50% / cover no-repeat;
`;

const SongTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 20rem;
  margin-left: 1rem;
`;

const SongTitle = styled.div`
  font-size: clamp(1rem, 1rem + 3vw, 4rem);
  margin-bottom: 0.69rem;
`;

const SongArtist = styled.div`
  font-size: clamp(1rem, 1rem + 3vw, 4rem);
`;

const LyricsContainer = styled.div`
  position: absolute;
  top: 82%;
  width: 100%;
  padding: 0rem 4rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const Lyrics = styled.div`
  text-align: center;
  font-size: clamp(1rem, 1rem + 3vw, 4rem);
`;

const SongTime = styled.div`
  text-align: center;
  width: 100%;
  padding: 0rem 5rem;
  box-sizing: border-box;
  font-size: clamp(0.7em, 0.7rem + 3vw, 4rem);
`;

const TimeColor = styled.div`
  color: #2C5EA7;
  display: inline;
`;

const Footer = styled.div`
  width: 100%;
  height: 18.12rem;
  position: relative;

  overflow-x: hidden;
  overflow-y: hidden;
`;

const FooterText = styled.div`
  color: var(--browngray);
  font-size: 1.25rem;
  text-align: center;

  position: absolute;
  transform: translate(-50%, -50%);

  left: 50%;
  bottom: 0;
  z-index: 10;
`;
