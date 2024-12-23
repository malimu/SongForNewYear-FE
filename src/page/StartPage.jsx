import styled from 'styled-components';

const StartPage = () => {
  return <Container>시작</Container>;
};

export default StartPage;

const Container = styled.div`
  min-height: 100vh;
  background-color: var(--beige);

  @media (min-width: 500px) {
    width: 31.25rem; //500px
    margin: 0 auto;
  }
`;
