import styled from 'styled-components';
import reloadIcon from '../../assets/StartPage/refresh.svg';
import { Button } from '../Button';
import { WishComponent } from './WishComponent';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRandomWish } from '../../api/wish';
import { useRotateOnClick } from '../../hooks/useRotateOnClick';

export const OtherWishes = () => {
  const nav = useNavigate();
  const [wishList, setWishList] = useState([]);
  const rotate = useRotateOnClick();

  useEffect(() => {
    getWishList();
  }, []);

  const getWishList = async () => {
    try {
      const res = await getRandomWish();
      setWishList(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <TitleContainer>
        <Title>다른 사람들이 빈 소원</Title>
        <ReloadIcon src={reloadIcon} onClick={getWishList} {...rotate} />
      </TitleContainer>
      <WishContainer>
        {wishList.map((item, idx) => (
          <WishComponent
            key={`${item.content}-${idx}`}
            wish={item.content}
            name={item.nickname}
            cat={item.category.toLowerCase()}
            idx={idx + 1}
          />
        ))}
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
