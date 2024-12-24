import styled from 'styled-components';
import sparkleYellow from '../assets/StartPage/sparkle1 2.svg';
import DJRamji from '../assets/StartPage/DJRamji.svg';
import bottomRamji from '../assets/StartPage/bottomRamji.svg';
import { WishForm } from '../component/StartPage/WishForm';
import { OtherWishes } from '../component/StartPage/OtherWishes';

const StartPage = () => {
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
      <WishForm />
      <OtherWishes />
      <Footer>
        <BottomRamji src={bottomRamji} />
        <FooterText>
          @ 2024 Team Malimu
          <br />
          All Rights Reserved
        </FooterText>
      </Footer>
    </Container>
  );
};

export default StartPage;

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
  top: -3rem;
  left: -3rem;
`;

const Daramgi = styled.img`
  position: absolute;
  top: -3.5rem;
  right: -4rem;
`;

const Footer = styled.div`
  width: 100%;
  height: 18.12rem;
  position: relative;

  overflow-x: hidden;
  overflow-y: hidden;
`;

const BottomRamji = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);

  left: 50%;
  bottom: -60%;
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
