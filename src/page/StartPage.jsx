import styled from 'styled-components';
import sparkleYellow from '../assets/StartPage/titleSparkle.svg';
import DJRamji from '../assets/StartPage/DJRamji.svg';
import bottomRamji from '../assets/StartPage/bottomRamji.svg';
import instaIcon from '../assets/StartPage/brand_instagram.svg';
import xIcon from '../assets/StartPage/brand_x.svg';
import { WishForm } from '../component/StartPage/WishForm';
import { OtherWishes } from '../component/StartPage/OtherWishes';
import { useState } from 'react';
import { StarAnimation } from '../component/StartPage/StarAnimation';

const StartPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <LoadingContainer>
        <LoadingTitle>
          소원을 이뤄줄
          <br /> 음악을 골라드릴게요!
        </LoadingTitle>
        <StarAnimation />
      </LoadingContainer>
    );
  }

  const onClickInsta = () => {
    window.location = 'https://www.instagram.com/songfornewyear/';
  };

  const onClickX = () => {
    window.location = 'https://x.com/songfornewyear';
  };

  return (
    <Container>
      <Header>새해첫곡</Header>
      <TitleContainer>
        <Title>
          <SparkleYellow src={sparkleYellow} />
          <Daramgi src={DJRamji} />
          새해 소원을 이뤄줄
          <br />
          노래를 추천해드려요!
        </Title>
      </TitleContainer>
      <WishForm setIsSubmitted={setIsSubmitted} />
      <OtherWishes />
      <Footer>
        <BottomRamji src={bottomRamji} />
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

export default StartPage;

const LoadingContainer = styled.div`
  @media (min-width: 500px) {
    width: 31.25rem; //500px
    margin: 0 auto;
  }
  width: 100%;
  height: 100vh;
  background-color: var(--beige);

  position: relative;
`;

const LoadingTitle = styled.div`
  text-align: center;
  font-size: 2.25rem;
  width: 100%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 35%;
  left: 50%;
`;

const Container = styled.div`
  @media (min-width: 500px) {
    width: 31.25rem; //500px
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

const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: 'Mungyeong-Gamhong-Apple';
  font-size: 1rem;
  padding: 1.69rem;
  box-sizing: border-box;

  cursor: pointer;
`;

const TitleContainer = styled.div`
  @media (min-width: 500px) {
    width: 31.25rem; //500px
    margin: 0 auto;
  }
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
  font-size: 2.25rem;

  position: relative;
`;

const SparkleYellow = styled.img`
  position: absolute;
  top: -1.5rem;
  left: -2.5rem;
`;

const Daramgi = styled.img`
  position: absolute;
  top: -4.5rem;
  right: -4.4rem;
`;

const Footer = styled.div`
  width: 100%;
  height: 23.25rem;
  position: relative;

  overflow-x: hidden;
  overflow-y: hidden;
`;

const BottomRamji = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);

  left: 55%;
  bottom: -50%;
`;

const FooterText = styled.div`
  color: var(--browngray);
  font-size: 1.25rem;
  text-align: center;

  position: absolute;
  transform: translate(-50%, -50%);

  left: 50%;
  bottom: 20%;
  z-index: 10;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 2.87rem;

  position: absolute;
  transform: translate(-50%, -50%);

  left: 50%;
  bottom: 10%;
  z-index: 10;
`;

const Insta = styled.img``;

const X = styled.img``;
