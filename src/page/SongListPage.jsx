import styled from 'styled-components';
import sparkleRamji from '../assets/SongListPage/songlist.svg';
import { SongComponent } from '../component/SongListPage/SongComponent';
import { PagingBar } from '../component/SongListPage/PagingBar';
import { useEffect, useState } from 'react';

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

const Dummy = [
  {
    title: '1조',
    artist: '이찬혁',
    category: 'WEALTH',
    lyrics:
      'Cuz it will come true true true true\n1조 will come true true true true',
    cover_path:
      'https://cdnimg.melon.co.kr/cm2/album/images/113/91/548/11391548_20231229103157_500.jpg?e3ba607f2495c28b2f213d30ef7ea349/melon/resize/282/quality/80/optimize',
    youtube_path: 'https://youtu.be/KMlfL9Xy-K4?si=cHUNx2-A24VE0Ufj',
  },
  {
    title: '24K Magic',
    artist: 'Bruno Mars',
    category: 'WEALTH',
    lyrics: '24 karat magic in the air',
    cover_path:
      'https://cdnimg.melon.co.kr/cm/album/images/100/04/486/10004486_500.jpg/melon/resize/282/quality/80/optimize',
    youtube_path: 'https://www.youtube.com/watch?v=UqyT8IEBkvY',
  },
  {
    title: '7 rings',
    artist: 'Ariana Grande',
    category: 'WEALTH',
    lyrics: 'I want it, I got it, I want it, I got it',
    cover_path:
      'https://cdnimg.melon.co.kr/cm/album/images/102/43/766/10243766_500.jpg?51ffb6b52e1a73bf914e3582dc86259c/melon/resize/282/quality/80/optimize',
    youtube_path: 'https://youtu.be/QYh6mYIJG2Y?si=JJNsCCutzjk0-WqL',
  },
  {
    title: '가보자',
    artist: 'Xydo',
    category: 'BEGINNING',
    lyrics:
      '반짝이는 꿈들로 가득 찬 저 세상이\n날 부르고 있잖아 조금 더 가보자',
    cover_path:
      'https://cdnimg.melon.co.kr/cm2/album/images/108/94/351/10894351_20220318163202_500.jpg?2ccfaa9d732e500e97a7e3d663ec4343/melon/resize/282/quality/80/optimize',
    youtube_path: 'https://youtu.be/aY382UdxfnQ?si=Qloiz7safmuQDkWX',
  },
  {
    title: '개화',
    artist: '루시',
    category: 'COURAGE',
    lyrics: '괜찮아 언젠가 파랗게 피어날 거야',
    cover_path:
      'https://cdnimg.melon.co.kr/cm2/album/images/104/28/038/10428038_20200508161504_500.jpg?649155371b3049eb7a23f8b03e054387/melon/resize/282/quality/80/optimize',
    youtube_path: 'https://www.youtube.com/watch?v=2-P-NIiLiQc',
  },
];

const SongListPage = () => {
  const [isSticky, setIsSticky] = useState(true);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const checkHeight = () => {
      const viewportHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      setIsSticky(pageHeight > viewportHeight);
    };

    checkHeight();
  }, []);

  const onClickFilter = (cat) => {
    if (filter === cat) {
      setFilter(null);
    } else {
      setFilter(cat);
    }
  };

  return (
    <Container>
      <Header>새해첫곡</Header>
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
        {Dummy.map((item) => (
          <SongComponent info={item} />
        ))}
      </SongListContainer>
      <BottomContainer $isSticky={isSticky}>
        <PagingBar totalItems={35} />
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
