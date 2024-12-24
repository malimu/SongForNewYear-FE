import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import pinkstar from '../../assets/StartPage/pinkstar.svg';
import yellowstar from '../../assets/StartPage/yellostar.svg';

export const WishComponent = ({ wish, name, cat, idx }) => {
  //const aniDelay = idx < 4 ? idx / 2 : 0;
  const animation = useScrollFadeIn();

  return (
    <Container $idx={idx} $cat={cat} {...animation}>
      {idx === 2 && <YellowStar src={yellowstar} />}
      <Wish>{wish}</Wish>
      <Name>{name}</Name>
      {idx === 3 && <PinkStar src={pinkstar} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 86%;
  min-width: 14.25rem;
  min-height: 4.875rem;

  border-radius: 1.5625rem;
  border: 1.5px solid var(--brown);

  padding: 0.81rem 1.25rem;
  box-sizing: border-box;

  margin-left: ${({ $idx }) => ($idx % 2 == 0 ? 'auto' : '0')};
  margin-top: ${({ $idx }) => ($idx === 1 ? '0' : '-0.5rem')};

  background-color: ${({ $cat }) => `var(--${$cat}80)`};

  position: relative;
  z-index: ${({ $idx }) => $idx};
`;

const Wish = styled.div`
  width: 100%;
  font-size: 1.5rem;
`;

const Name = styled.div`
  margin-left: auto;
  color: var(--browngray);
  font-size: 1.25rem;
`;

const YellowStar = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: -2rem;
`;

const PinkStar = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  right: -4rem;
`;
