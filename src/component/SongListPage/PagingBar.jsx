import styled from 'styled-components';
import { useState } from 'react';

export const PagingBar = () => {
  const TOTAL_PAGES = 10;
  const CAT_PAGES = 3;
  const PAGES_PER_GROUP = 3;

  const [currentGroup, setCurrentGroup] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const startPage = (currentGroup - 1) * PAGES_PER_GROUP + 1;
  const endPage = Math.min(startPage + PAGES_PER_GROUP - 1, TOTAL_PAGES);

  const onClickPage = (page) => {
    setCurrentPage(page);
  };

  const onClickPrev = () => {
    setCurrentGroup((prevGroup) => {
      const newGroup = prevGroup - 1;
      if (newGroup >= 1) {
        setCurrentPage(newGroup * 3 - 2);
      }
      return newGroup;
    });
  };

  const onClickNext = () => {
    setCurrentGroup((prevGroup) => {
      const newGroup = prevGroup + 1;
      if (newGroup * 3 - 2 <= TOTAL_PAGES) {
        setCurrentPage(newGroup * 3 - 2);
      }
      return newGroup;
    });
  };

  return (
    <Container>
      <Arrow onClick={onClickPrev}>{'<'}</Arrow>
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((page) => (
        <Page
          key={page}
          $isActive={page === currentPage}
          onClick={() => onClickPage(page)}
        >
          {page}
        </Page>
      ))}
      <Arrow onClick={onClickNext}>{'>'}</Arrow>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  font-size: 1.75rem;
  margin-top: 2.25rem;

  color: var(--browngray);
`;

export const Arrow = styled.div``;

export const Page = styled.div`
  color: ${({ $isActive }) => $isActive && 'var(--brown)'};
`;
