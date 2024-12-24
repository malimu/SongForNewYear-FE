import styled from 'styled-components';
import { Button } from '../component/Button';
import sparkleYellow from '../assets/StartPage/sparkle1 2.svg';
import DJRamji from '../assets/StartPage/DJRamji.svg';
import { WishForm } from '../component/StartPage/WishForm';

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
`;

const Header = styled.div`
  @media (min-width: 500px) {
    width: 31.25rem; //500px
    margin: 0 auto;
  }
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: 'Mungyeong-Gamhong-Apple';
  font-size: 1rem;
  padding: 0.62rem 1.69rem;
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

  padding: 4rem 0 2.5rem;
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
