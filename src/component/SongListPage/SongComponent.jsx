import styled from 'styled-components';
import musicComp from '../../assets/SongListPage/musicComp.svg';

export const SongComponent = ({ info }) => {
  const onClickSongContainer = () => {
    window.location = info.youtube_path;
  };

  const timeToSecond = (time) => {
    const parts = time.split(':').map(Number);
    if (parts.length === 3) {
      const [hours, minutes, seconds] = parts;
      return hours * 3600 + minutes * 60 + seconds;
    } else if (parts.length === 2) {
      const [minutes, seconds] = parts;
      return minutes * 60 + seconds;
    }
    //throw new Error('Invalid time format');
  };

  const formatTimeString = (time) => {
    const parts = time.split(':').map(Number);
    if (parts.length === 3) {
      const [hours, minutes, seconds] = parts;
      const totalMinutes = hours * 60 + minutes;
      return `${totalMinutes}:${seconds.toString().padStart(2, '0')}`;
    }
    //throw new Error('Invalid time format' + info.title + info.time);
  };

  const start_time = formatTimeString(info.start_time);
  const total_time = formatTimeString(info.total_time);

  const progress =
    (
      timeToSecond(info.start_time || '00:00:00') /
      timeToSecond(info.total_time || '00:04:00')
    ).toFixed(2) * 100;

  return (
    <Container $cat={info.category.toLowerCase()}>
      <Sparkle src={musicComp} />
      <Lyrics>“ {info.lyrics} ”</Lyrics>
      <SongContainer onClick={onClickSongContainer}>
        <CoverImg src={info.cover_path} />
        <InfoContainer>
          <Title>{info.title}</Title>
          <Singer>{info.artist}</Singer>
          <ProgressBarContainer>
            <Time>{start_time || 'mm:ss'}</Time>
            <Bar>
              <EntireBar />
              <ProgressBar $progress={progress} />
              <Progress $progress={progress} />
            </Bar>

            <Time>{total_time || 'mm:ss'}</Time>
          </ProgressBarContainer>
        </InfoContainer>
      </SongContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 10.3125rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 0.75rem;
  box-sizing: border-box;

  border-radius: 1.25rem;
  border: 1.5px solid var(--brown);

  background-color: ${({ $cat }) => `var(--${$cat})`};
  position: relative;
`;

const Sparkle = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 1.8rem;
  right: -0.8rem;
`;

const Lyrics = styled.div`
  font-size: 1.25rem;
  width: 85%;
  white-space: pre-wrap;
  text-align: center;
`;

const SongContainer = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  padding: 0.6rem;
  box-sizing: border-box;

  border-radius: 0.625rem;
  background: rgba(255, 255, 255, 0.5);
`;

const CoverImg = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.625rem;
`;

const InfoContainer = styled.div`
  width: calc(100% - 3.75rem - 0.6rem);
  height: 3.75rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 1.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Singer = styled.div`
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Time = styled.div`
  font-size: 0.75rem;
  color: var(--browngray);
`;

const Bar = styled.div`
  width: 80%;
  height: 0.4rem;

  position: relative;
`;

const EntireBar = styled.hr`
  width: 100%;
  height: 0.125rem;
  background-color: #d9d9d9;
  border: 0;
  border-radius: 1px;

  position: absolute;
  transform: translateY(-50%);
  top: 50%;
`;

const ProgressBar = styled.hr`
  width: ${({ $progress }) => `${$progress}%`};
  height: 0.125rem;

  background-color: var(--brown);
  border: 0;
  border-radius: 1px;

  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  z-index: 5;
`;

const Progress = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: var(--brown);

  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: ${({ $progress }) => `${$progress}%`};
  z-index: 6;
`;
