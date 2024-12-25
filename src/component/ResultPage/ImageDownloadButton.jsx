import styled from 'styled-components';
import icon from '../../assets/ResultPage/download_icon.svg';

export const ImageDownloadButton = ({ onClick }) => {
  const isActive = true;
  
  return (
    <Container
      $color={"brown"}
      $isActive={true}
      onClick={isActive ? onClick : undefined}
    >
      <Icon src={icon} />
      이미지로 저장하기
    </Container>
  );
};

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  font-size: 1.875rem;
  padding: 0.31rem 0;
  box-sizing: border-box;

  background-color: ${({ $color }) =>
    $color == 'brown' ? '#8B7966' : '#ffe4a4'};
  color: ${({ $color }) => ($color == 'brown' ? 'white' : '#6b5743')};
  border-radius: 3.125rem;
  border: 1.5px solid #6b5743;

  opacity: ${({ $isActive }) => !$isActive && '50%'};
`;

const Icon = styled.img`
  margin-right: 0.62rem;
`;
