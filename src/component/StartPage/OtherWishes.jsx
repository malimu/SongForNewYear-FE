import styled from 'styled-components';
import reloadIcon from '../../assets/StartPage/refresh.svg';
import { Button } from '../Button';
import { WishComponent } from './WishComponent';
import { useNavigate } from 'react-router-dom';

export const OtherWishes = () => {
  const nav = useNavigate();

  return (
    <Container>
      <TitleContainer>
        <Title>다른 사람들이 빈 소원</Title>
        <ReloadIcon src={reloadIcon} />
      </TitleContainer>
      <WishContainer>
        <WishComponent
          wish="이재현이랑 결혼하게 해주세요"
          name="랑이"
          cat={'love'}
          idx={1}
        />
        <WishComponent
          wish="이재현이랑 결혼하게 해주세요"
          name="랑이"
          cat={'beginning'}
          idx={2}
        />
        <WishComponent
          wish="이재현이랑 결혼하게 해주세요"
          name="랑이"
          cat={'courage'}
          idx={3}
        />
        <WishComponent
          wish="이재현이랑 결혼하게 해주세요"
          name="랑이"
          cat={'love'}
          idx={4}
        />
      </WishContainer>
      <ButtonWrapper>
        <Button
          text="노래 전체 목록 보기"
          color="brown"
          onClick={() => nav('/songlist')}
        />
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4.4rem;
  padding: 0 2rem;
  box-sizing: border-box;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.81rem;
`;

const Title = styled.div`
  font-size: 2.25rem;
`;

const ReloadIcon = styled.img``;

const WishContainer = styled.div`
  width: 100%;
  margin: 2rem 0 2.5rem;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0 1.25rem;
  box-sizing: border-box;
`;
