import styled from 'styled-components';

const ResultPage = () => {
  return <Container>결과</Container>;
};

export default ResultPage;

const Container = styled.div`
  height: 100vh;
  background-color: white;

  @media (min-width: 500px) {
    width: 31.25rem; //500px
    margin: 0 auto;
  }
`;
