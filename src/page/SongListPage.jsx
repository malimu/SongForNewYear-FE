import styled from 'styled-components';

const SongListPage = () => {
  return <Container>노래리스트</Container>;
};

export default SongListPage;

const Container = styled.div`
  background-color: white;
  height: 100vh;

  @media (min-width: 500px) {
    width: 31.25rem; //500px
    margin: 0 auto;
  }
`;
