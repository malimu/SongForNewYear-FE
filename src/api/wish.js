import { client } from './client';
import { serverState } from './client';

export const postWish = async (data) => {
  if (serverState) {
    try {
      const res = await client.post(`/api/wish`, data);
      return res.data;
    } catch (error) {
      throw error;
    }
  } else {
    return {
      wish_id: '12345678910',
      nickname: data.nickname,
      wish: data.content,
      ...dummyResult[Math.floor(Math.random() * dummyResult.length)],
    };
  }
};

export const getRandomWish = async () => {
  if (serverState) {
    try {
      const res = await client.get(`/api/wish/random?limit=4`);
      return res.data;
    } catch (error) {
      throw error;
    }
  } else {
    return dummyWish;
  }
};

const dummyResult = [
  {
    category: 'HAPPINESS',
    recommended_song: {
      title: '너와의 모든 지금',
      artist: '재쓰비',
      lyrics: '쏟아지는 별빛들보다\n눈부시게 빛나고 있어',
      recommend_time: '00:01:02',
      youtube_path: 'https://youtu.be/XV0lSvr0huU?si=o6rHiTiC3w7p6vdr',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273732c97e6153efc730ed4dc67',
    },
    wishes_count: '100',
  },
  {
    category: 'LUCK',
    recommended_song: {
      title: 'Clover',
      artist: '더보이즈',
      lyrics: '너의 눈을 보고 있는 지금도\n그래, 넌 나의 행운이야',
      recommend_time: '00:01:05',
      youtube_path: 'https://www.youtube.com/watch?v=l0AjBbZPHn0',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2733ea369ee99ae2fb732fa92d9',
    },
    wishes_count: '100',
  },
  {
    category: 'SUCCESS',
    recommended_song: {
      title: '시작',
      artist: '가호',
      lyrics: '원하는 대로 다 가질거야\n그게 바로 내 꿈일 테니까',
      recommend_time: '00:00:38',
      youtube_path: 'https://youtu.be/O0StKlRHVeE?si=k2pAk20kwCSrZB5E',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2739c176966fec78dfc60d37fad',
    },
    wishes_count: '100',
  },
  {
    category: 'COURAGE',
    recommended_song: {
      title: 'Butter-fly',
      artist: '전영호',
      lyrics: '그래도 날아오를 거야 작은 날갯짓에\n꿈을 담아 조금만 기다려봐',
      recommend_time: '00:00:12',
      youtube_path: 'https://youtu.be/c-2T-JnXEr8?si=k4-sGxHt910PKUea',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273c87699ac1cf1800556129371',
    },
    wishes_count: '100',
  },
  {
    category: 'BEGINNING',
    recommended_song: {
      title: 'MIROH',
      artist: '스트레이키즈',
      lyrics: "힘들지 않아 거친 정글 속에\n뛰어든 건 나니까 I'm okay",
      recommend_time: '00:01:23',
      youtube_path: 'https://youtu.be/Dab4EENTW5I?si=m7JYNHLB5ITjY-vG',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b27342010310811b8712aa7e3a45',
    },
    wishes_count: '100',
  },
];

const dummyWish = [
  {
    nickname: '백수준비생',
    content: '졸업하고 취업하기',
    category: 'BEGINNING',
  },
  {
    nickname: '럭키',
    content: '내가 선택하는 모든 일에 행운이 따르기를🍀',
    category: 'LUCK',
  },
  {
    nickname: '오랑이',
    content: '로또 1등 당첨!!',
    category: 'WEALTH',
  },
  {
    nickname: '새해첫곡',
    content: '여러분들의 소원이 전부 이루어지길',
    category: 'LOVE',
  },
];
