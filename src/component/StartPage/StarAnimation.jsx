import star from '../../assets/StartPage/star.svg';
import styled, { keyframes } from 'styled-components';

export const StarAnimation = () => {
  return (
    <Container>
      <Star src={star} $delay={'0s'} />
      <Star src={star} $delay={'0.5s'} />
      <Star src={star} $delay={'1s'} />
    </Container>
  );
};

const bounce1 = keyframes`
  0%, 100% {
    transform: translateY(0);

  }
  50% {
    transform: translateY(-30px);

  }
`;

const Container = styled.div`
  height: 8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const Star = styled.img`
  animation: ${bounce1} 1.5s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || '0s'};
`;
