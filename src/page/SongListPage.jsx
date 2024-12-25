import styled from 'styled-components';
import sparkleRamji from '../assets/SongListPage/songlist.svg';
import { SongComponent } from '../component/SongListPage/SongComponent';
import { PagingBar } from '../component/SongListPage/PagingBar';
import { useEffect, useState } from 'react';
import { getSongList } from '../api/song';
import { useNavigate } from 'react-router-dom';

const filterList = [
  '시작',
  '성공',
  '건강',
  '행운',
  '금전',
  '행복',
  '사랑',
  '용기',
];

const filterMap = {
  시작: 'beginning',
  성공: 'success',
  건강: 'health',
  행운: 'luck',
  금전: 'wealth',
  행복: 'happiness',
  사랑: 'love',
  용기: 'courage',
};

const SongListPage = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [filter, setFilter] = useState(null);
  const [songData, setSongData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const nav = useNavigate();

  useEffect(() => {
    const getSongData = async () => {
      try {
        const res = await getSongList(filterMap[filter], currentPage, 5);
        setSongData(res);
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // 부드럽게 스크롤
        });
      } catch (error) {
        console.error(error);
      }
    };

    getSongData();
  }, [filter, currentPage]);

  useEffect(() => {
    const checkHeight = () => {
      const viewportHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      setIsSticky(pageHeight > viewportHeight);
    };

    checkHeight();
  }, [songData, filter]);

  const onClickFilter = (cat) => {
    if (filter === cat) {
      setFilter(null);
    } else {
      setFilter(cat);
    }
  };

  return (
    <Container>
      <Header onClick={() => nav('/')}>새해첫곡</Header>
      <TitleContainer>
        <Sparkle src={sparkleRamji} />
        <Title>노래 목록 보기</Title>
      </TitleContainer>
      <FilterContainer>
        {filterList.map((cat, idx) => (
          <FilterButton
            key={idx}
            $isActive={filter === cat}
            $color={filterMap[cat]}
            onClick={() => onClickFilter(cat)}
          >
            {cat}
          </FilterButton>
        ))}
      </FilterContainer>
      <SongListContainer>
        {songData.data &&
          songData.data.map((item) => <SongComponent info={item} />)}
      </SongListContainer>
      <BottomContainer $isSticky={isSticky}>
        <PagingBar
          totalItems={songData.total_items || 1}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Footer>
          @ 2024 Team Malimu
          <br />
          All Rights Reserved
        </Footer>
      </BottomContainer>
    </Container>
  );
};

export default SongListPage;

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
  width: 100%;
  height: 9rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.37rem;
  position: relative;
`;

const Sparkle = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 4rem;

  width: 90%;
  height: auto;
`;

const Title = styled.div`
  font-size: 2.25rem;
`;

const FilterContainer = styled.div`
  width: 100%;
  margin: 1.61rem 0;
  padding: 0 1.25rem;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.62rem;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.2rem 0;
  box-sizing: border-box;

  border-radius: 3.125rem;
  border: 1.5px solid var(--brown);
  background-color: ${({ $isActive, $color }) =>
    $isActive ? `var(--${$color})` : 'transparent'};

  font-size: 1.5625rem;
  color: var(--brown);
`;

const SongListContainer = styled.div`
  width: 100%;
  //min-height: 56rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0 1.25rem;
  box-sizing: border-box;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: ${({ $isSticky }) => ($isSticky ? 'sticky' : 'absolute')};
  bottom: 0;
`;

const Footer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.25rem;
  color: var(--browngray);
  text-align: center;
`;
