import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import styled from 'styled-components';
import Beginning from '../assets/ResultPage/result_beginning.svg';
import Courage from '../assets/ResultPage/result_courage.svg';
import Happiness from '../assets/ResultPage/result_happiness.svg';
import Wealth from '../assets/ResultPage/result_wealth.svg';
import Health from '../assets/ResultPage/result_health.svg';
import Luck from '../assets/ResultPage/result_luck.svg';
import Love from '../assets/ResultPage/result_love.svg';
import Success from '../assets/ResultPage/result_success.svg';
import { BelowContents } from '../component/ResultPage/BelowContents';

const ResultPage = () => {
  const captureRef = useRef(null);

  const location = useLocation();
  const { state } = location || {};
  const res = state?.res;

  const categoryImageMap = {
    WEALTH: Wealth,
    BEGINNING: Beginning,
    LOVE: Love,
    COURAGE: Courage,
    HAPPINESS: Happiness,
    HEALTH: Health,
    LUCK: Luck,
    SUCCESS: Success,
  };

  const categoryTextColorMap = {
    WEALTH: 'var(--wealthTxt)',
    BEGINNING: 'var(--beginningTxt)',
    LOVE: 'var(--loveTxt)',
    COURAGE: 'var(--courageTxt)',
    HAPPINESS: 'var(--happinessTxt)',
    HEALTH: 'var(--healthTxt)',
    LUCK: 'var(--luckTxt)',
    SUCCESS: 'var(--successTxt)',
  };

  const resultCardImage = categoryImageMap[res?.category] || Courage;
  const timeTextColor = categoryTextColorMap[res?.category] || 'var(--courageTxt)';

  const wishText = res.wish;
  const wishLength = wishText.length;

  const songTitleText = res.recommended_song.title;
  const songTitleLength = songTitleText.length;

  const artistText = res.recommended_song.artist;
  const artistLength = artistText.length;

  const LyricsText = res.recommended_song.lyrics;
  const LyricsLength = LyricsText.length;

  const resTime = res.recommended_song.recommend_time.split(",")[1];
  const [hh, mm, ss] = resTime.split(":");
  const formattedTime = `${hh}시 ${mm}분 ${ss}초`;

  const url = res.recommended_song.youtube_path;
  const videoCode = url.split("v=")[1];


  const handleCapture = async () => {
    if (!captureRef.current) return;

    const canvas = await html2canvas(captureRef.current, {
      useCORS: true, // CORS 이미지 허용
      logging: true,
    });
    const link = document.createElement('a');
    link.download = 'songfornewyear_result.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <Container>
      <CardContainer ref={captureRef}>
        <ResultCardContainer>
          <ResultCard src={resultCardImage} />
          <TitleContainer>
            <Title>{res.nickname} 님의 소원</Title>
          </TitleContainer>
          <WishContainer>
            <Wish textLength={wishLength}>{wishText}</Wish>
          </WishContainer>
          <SongContainer>
            <AlbumCover src={res.recommended_song.cover_path}/>
            <SongTextContainer>
              <SongTitle textLength={songTitleLength}>{songTitleText}</SongTitle>
              <SongArtist textLength={artistLength}>{artistText}</SongArtist>
            </SongTextContainer>
          </SongContainer>
          <LyricsContainer>
            <Lyrics textLength={LyricsLength}>{LyricsText}</Lyrics>
          </LyricsContainer>
        </ResultCardContainer>
        <SongTime>
          12월 31일 <TimeColor style={{ color: timeTextColor }}>{formattedTime}</TimeColor>에 재생 시 <br />이 가사로 한 해를 시작할 수 있어요!
        </SongTime>
      </CardContainer>
      <BelowContents 
        onCapture={handleCapture} 
        videoCode={videoCode}
        nickname={res.nickname}
        songTitle={res.recommended_song.title}
        artist={res.recommended_song.artist}
        lyrics={res.recommended_song.lyrics}
        wishCount={res.wishes_count}
      />
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
  color: var(--darkbrown);

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
  font-size: clamp(2rem, calc(1.5rem + 3vw), 2.7rem);
`;

const WishContainer = styled.div`
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem 3.2rem;
  box-sizing: border-box;
`;

const Wish = styled.div`
  text-align: center;
  font-size: ${({ textLength }) => {
    if (textLength <= 20) return "3rem";
    if (textLength <= 40) return "2.5rem";
    if (textLength <= 50) return "2rem";
    return "1.5rem";
  }};
  max-height: 7rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: keep-all;
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
  gap: 1rem;

  padding: 0rem 3rem;
  box-sizing: border-box;
`;

const AlbumCover = styled.img.attrs(() => ({
  crossOrigin: "anonymous",
}))`
  width: clamp(10rem, 40vw, 11rem);
  aspect-ratio: 1 / 1;
  border-radius: 0.625rem;
  object-fit: cover;
  overflow: hidden;
  object-position: center;
  background-color: #FFE4A4;
`;

const SongTextContainer = styled.div`
  width: clamp(10rem, 50vw, 18rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-left: 1rem;
  text-align: start;
`;

const SongTitle = styled.div`
  font-size: ${({ textLength }) => {
    if (textLength <= 5) return "clamp(2rem, 1.8rem + 2vw, 3rem)";
    if (textLength <= 10) return "clamp(1.8rem, 1.6rem + 1.5vw, 2.5rem)";
    if (textLength <= 15) return "clamp(1.6rem, 1.4rem + 1.2vw, 2rem)";
    return "clamp(1.4rem, 1.2rem + 1vw, 1.8rem)";
  }};
  max-width: 100%;
  margin-bottom: 0.69rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const SongArtist = styled.div`
  font-size: ${({ textLength }) => {
    if (textLength <= 5) return "clamp(1.8rem, 1.5rem + 1.5vw, 2.5rem)";
    if (textLength <= 10) return "clamp(1.6rem, 1.4rem + 1.2vw, 2rem)";
    if (textLength <= 15) return "clamp(1.4rem, 1.2rem + 1vw, 1.8rem)";
    return "clamp(1.2rem, 1rem + 0.8vw, 1.5rem)";
  }};
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const LyricsContainer = styled.div`
  position: absolute;
  top: 80%;
  width: 100%;
  height: clamp(6rem, 6rem + 5vw, 9rem);
  padding: 0.5rem 2.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Lyrics = styled.div`
  text-align: center;
  vertical-align: middle;
  font-size: ${({ textLength }) => {
    if (textLength <= 20) return "clamp(1.8rem, 1.5rem + 1.5vw, 2.5rem)";
    if (textLength <= 40) return "clamp(1.6rem, 1.4rem + 1.2vw, 2rem)";
    if (textLength <= 50) return "clamp(1.4rem, 1.2rem + 1vw, 1.8rem)";
    return "clamp(1.2rem, 1rem + 0.8vw, 1.5rem)";
  }};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;

const SongTime = styled.div`
  text-align: center;
  width: 100%;
  padding: 0rem 4rem;
  box-sizing: border-box;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: clamp(1rem, calc(1rem + 1vw), 1.5rem);
`;

const TimeColor = styled.div`
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
