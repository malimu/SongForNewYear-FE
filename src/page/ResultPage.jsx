import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import instaIcon from '../assets/StartPage/brand_instagram.svg';
import xIcon from '../assets/StartPage/brand_x.svg';
import { BelowContents } from '../component/ResultPage/BelowContents';

const ResultPage = () => {
  const captureRef = useRef(null);

  const location = useLocation();
  const nav = useNavigate();
  const { state } = location || {};
  const res = state?.res;

  useEffect(() => {
    if (!state || !state.res) {
      nav('/');
    }
  }, [state, nav]);

  if (!state || !state.res) {
    return null;
  }

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
  const timeTextColor =
    categoryTextColorMap[res?.category] || 'var(--courageTxt)';

  const wishText = res.wish;
  const wishLength = wishText.length;

  const songTitleText = res.recommended_song.title;
  const songTitleLength = songTitleText.length;

  const artistText = res.recommended_song.artist;
  const artistLength = artistText.length;

  const LyricsText = res.recommended_song.lyrics;
  const LyricsLength = LyricsText.length;

  const recommendTime = res.recommended_song.recommend_time;
  let formattedTime = `알 수 없음`;

  const [hh, mm, ss] = recommendTime.split(':').map(Number);
  
  const inputSeconds = hh * 3600 + mm * 60 + ss;
  const totalSecondsInADay = 24 * 3600;
  const remainingSeconds = totalSecondsInADay - inputSeconds;
  
  const remainingHh = Math.floor(remainingSeconds / 3600);
  const remainingMm = Math.floor((remainingSeconds % 3600) / 60);
  const remainingSs = remainingSeconds % 60;
  
  formattedTime = `${String(remainingHh).padStart(2, '0')}시 ${String(remainingMm).padStart(2, '0')}분 ${String(remainingSs).padStart(2, '0')}초`;

  const url = res.recommended_song.youtube_path;
  const extractVideoCode = (url) => {
    try {
      const urlObj = new URL(url);

      // 짧은 URL 처리
      if (urlObj.hostname === 'youtu.be') {
        return urlObj.pathname.slice(1);
      }

      // 일반 YouTube URL 처리
      const params = new URLSearchParams(urlObj.search);
      return params.get('v') || null;
    } catch {
      return null;
    }
  };
  const videoCode = extractVideoCode(url);

  const handleCapture = async () => {
    if (!captureRef.current) return;

    const canvas = await html2canvas(captureRef.current, {
      scale: window.devicePixelRatio, // ios Retina 디스플레이 대응
      useCORS: true, // CORS 이미지 허용
      logging: true,
    });
    
    const link = document.createElement('a');
    link.download = 'songfornewyear_result.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const onClickInsta = () => {
    window.location = 'https://www.instagram.com/songfornewyear/';
  };

  const onClickX = () => {
    window.location = 'https://x.com/songfornewyear';
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
            <AlbumCover src={res.recommended_song.cover_path} />
            <SongTextContainer>
              <SongTitle textLength={songTitleLength}>
                {songTitleText}
              </SongTitle>
              <SongArtist textLength={artistLength}>{artistText}</SongArtist>
            </SongTextContainer>
          </SongContainer>
          <LyricsContainer>
            <Lyrics textLength={LyricsLength}>{LyricsText}</Lyrics>
          </LyricsContainer>
        </ResultCardContainer>
        <SongTime>
          12월 31일{' '}
          <TimeColor style={{ color: timeTextColor }}>
            {formattedTime}
          </TimeColor>
          에 재생하면 <br />이 가사로 한 해를 시작할 수 있어요!
        </SongTime>
        <Watermark>새해첫곡</Watermark>
        <SNSId>@songfornewyear</SNSId>
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

        <IconContainer>
          <Insta src={instaIcon} onClick={onClickInsta} />
          <X src={xIcon} onClick={onClickX} />
        </IconContainer>
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

const Watermark = styled.div`
  width: 100%;
  opacity: 50%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-family: 'Mungyeong-Gamhong-Apple';
  font-size: 1rem;
  margin-top: 0.5rem;
  padding: 0.2rem 2rem;
  box-sizing: border-box;
`;

const SNSId = styled.div`
  width: 100%;
  opacity: 50%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 0.7rem;
  padding: 0rem 2rem;
  box-sizing: border-box;
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

const ResultCard = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  aspect-ratio: 3360 / 5415;
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

  padding: 1rem 3rem;
  box-sizing: border-box;
`;

const Wish = styled.div`
  text-align: center;
  font-size: ${({ textLength }) => {
    if (textLength <= 20) return 'clamp(2rem, 2rem + 2vw, 3rem)';
    if (textLength <= 40) return 'clamp(1.5rem, 1.5rem + 2vw, 2.5rem)';
    if (textLength <= 50) return 'clamp(1.3rem, 1.3rem + 1vw, 1.5rem)';
    return 'clamp(1.3rem, 1.3rem + 1vw, 1.5rem)';
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

  padding: 0rem 3rem;
  box-sizing: border-box;
`;

const AlbumCover = styled.img.attrs(() => ({
  crossOrigin: 'anonymous',
}))`
  width: clamp(7rem, 9rem, 10rem);
  aspect-ratio: 1 / 1;
  border-radius: 0.625rem;
  object-fit: cover;
  overflow: hidden;
  object-position: center;
  background-color: #ffe4a4;
`;

const SongTextContainer = styled.div`
  width: clamp(10rem, 50vw, 18rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-left: 1rem;
  text-align: center;
`;

const SongTitle = styled.div`
  font-size: ${({ textLength }) => {
    if (textLength <= 5) return 'clamp(2rem, 1.8rem + 2vw, 3rem)';
    if (textLength <= 10) return 'clamp(1.8rem, 1.6rem + 1.5vw, 2.5rem)';
    if (textLength <= 15) return 'clamp(1.6rem, 1.4rem + 1.2vw, 2rem)';
    return 'clamp(1.4rem, 1.2rem + 1vw, 1.8rem)';
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
    if (textLength <= 5) return 'clamp(1.8rem, 1.5rem + 1.5vw, 2.5rem)';
    if (textLength <= 10) return 'clamp(1.6rem, 1.4rem + 1.2vw, 2rem)';
    if (textLength <= 15) return 'clamp(1.4rem, 1.2rem + 1vw, 1.8rem)';
    return 'clamp(1.2rem, 1rem + 0.8vw, 1.5rem)';
  }};
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const LyricsContainer = styled.div`
  position: absolute;
  top: 89%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: clamp(6rem, 7rem + 3vw, 9rem);
  padding: 0.5rem 4rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Lyrics = styled.div`
  text-align: center;
  vertical-align: middle;
  font-size: ${({ textLength }) => {
    if (textLength <= 20) return 'clamp(1.8rem, 1.5rem + 1.5vw, 2.5rem)';
    if (textLength <= 40) return 'clamp(1.6rem, 1.4rem + 1.2vw, 2rem)';
    if (textLength <= 50) return 'clamp(1.4rem, 1.2rem + 1vw, 1.8rem)';
    return 'clamp(1.2rem, 1rem + 0.8vw, 1.5rem)';
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
  padding: 0rem 2rem;
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
  height: 12.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1.2rem;
`;

const FooterText = styled.div`
  color: var(--browngray);
  font-size: 1.25rem;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 2.87rem;
`;

const Insta = styled.img``;

const X = styled.img``;
