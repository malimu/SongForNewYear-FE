import { client, serverState } from './client';

export const getSongList = async (cat, page, size) => {
  if (serverState) {
    try {
      if (cat) {
        const res = await client.get(
          `/api/song/list?category=${cat.toUpperCase()}&page=${page}&size=${size}`
        );
        return res.data;
      } else {
        const res = await client.get(
          `/api/song/list?page=${page}&size=${size}`
        );
        return res.data;
      }
    } catch (error) {
      throw error;
    }
  } else {
    if (cat) {
      return { total_items: 5, data: dummyList[cat] };
    } else {
      return { total_items: 5, data: dummyList.entire };
    }
  }
};

const dummyList = {
  entire: [
    {
      artist: '윤하',
      title: '나는 계획이 있다',
      category: 'BEGINNING',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2739917b7a6f06d0d2df5a4bc50',
      lyrics: 'Go far 멀리 멀리 모험을 시작해\n계획이 있어 걱정은 마',
      start_time: '00:00:45',
      total_time: '00:03:20',
      youtube_path: 'https://www.youtube.com/watch?v=46YuYoiyBcA',
    },
    {
      title: '시작',
      artist: '가호',
      category: 'SUCCESS',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2739c176966fec78dfc60d37fad',
      lyrics: '원하는 대로 다 가질 거야\n그게 바로 내 꿈일 테니까',
      start_time: '00:00:38',
      total_time: '00:03:22',
      youtube_path: 'https://youtu.be/O0StKlRHVeE?si=k2pAk20kwCSrZB5E',
    },
    {
      artist: '하이키',
      title: '건물 사이에 피어난 장미',
      category: 'HEALTH',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b27396ee3a02b72db60d065f1dd4',
      lyrics: '고갤 들고 버틸게 끝까지',
      start_time: '00:00:57',
      total_time: '00:03:15',
      youtube_path: 'https://www.youtube.com/watch?v=vfUAckewh_8',
    },
    {
      artist: '원필',
      title: '행운을 빌어 줘',
      category: 'LUCK',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2732ec585e31107f0e55ee205b7',
      lyrics: '아무쪼록 행운을 빌어 줘\n내 앞길에 행복을 빌어 줘',
      start_time: '00:00:55',
      total_time: '00:03:29',
      youtube_path: 'https://youtu.be/hrXCP0xeoA8?si=sZ8Gf7E8pDi9JUgI',
    },
    {
      artist: '레드벨벳',
      title: '행복',
      category: 'HAPPINESS',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273ccd9a8fe25e9ae6039ac6ce6',
      lyrics: '한 방에 멋진 일이 가득, straight up',
      start_time: '00:00:21',
      total_time: '00:03:41',
      youtube_path: 'https://youtu.be/JFgv8bKfxEs?si=W0Jq30FR8Oub0bck&t=6',
    },
  ],
  beginning: [
    {
      artist: '윤하',
      title: '나는 계획이 있다',
      category: 'BEGINNING',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2739917b7a6f06d0d2df5a4bc50',
      lyrics: 'Go far 멀리 멀리 모험을 시작해\n계획이 있어 걱정은 마',
      start_time: '00:00:45',
      total_time: '00:03:20',
      youtube_path: 'https://www.youtube.com/watch?v=46YuYoiyBcA',
    },
    {
      artist: '페퍼톤스',
      title: '라이더스',
      category: 'BEGINNING',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273bd51885518bfabed8daf84cc',
      lyrics: '하늘은 아직도 푸르네\n눈부신 바다를 꿈꾸네',
      start_time: '00:02:43',
      total_time: '00:04:23',
      youtube_path: 'https://youtu.be/Xa5AeVWT2AY?si=EEIptxxonDJHsh4b',
    },
    {
      title: '새봄의 노래',
      artist: '도영',
      category: 'BEGINNING',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273c9718133b45cf5b97cd91d38',
      lyrics: '새로이 불어오는 새봄의 바람\n부를게 바람 따라 더 퍼질 노래',
      start_time: '00:00:10',
      total_time: '00:03:28',
      youtube_path: 'https://www.youtube.com/watch?v=a5TheCP_T1Q',
    },
    {
      artist: '유정석',
      title: '질풍가도',
      category: 'BEGINNING',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273b2f2b32eff2062459941a50a',
      lyrics: '한 번 더 나에게 질풍 같은 용기를',
      start_time: '00:00:02',
      total_time: '00:03:12',
      youtube_path: 'https://youtu.be/8avIl2fNYi0?si=ayh8VFMzirnXU7YZ',
    },
    {
      artist: '이펙스',
      title: '청춘에게',
      category: 'BEGINNING',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2739e7919d20603d130f0331d0a',
      lyrics: "so light it up let's start tonight\n헤매도 돼 괜찮아",
      start_time: '00:00:37',
      total_time: '00:03:20',
      youtube_path: 'https://www.youtube.com/watch?v=Er-IH6txYhI',
    },
  ],
  success: [
    {
      title: '시작',
      artist: '가호',
      category: 'SUCCESS',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2739c176966fec78dfc60d37fad',
      lyrics: '원하는 대로 다 가질 거야\n그게 바로 내 꿈일 테니까',
      start_time: '00:00:38',
      total_time: '00:03:22',
      youtube_path: 'https://youtu.be/O0StKlRHVeE?si=k2pAk20kwCSrZB5E',
    },
    {
      artist: '윤하',
      title: '오르트구름',
      category: 'SUCCESS',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2739917b7a6f06d0d2df5a4bc50',
      lyrics: '두려움은 이제 거둬 오로지 나를 믿어\n지금이 바로 time to fly',
      start_time: '00:00:45',
      total_time: '00:03:26',
      youtube_path: 'https://youtu.be/58IEh6YkuzQ?si=r8XqNt9v40xORRmb',
    },
    {
      artist: '체리필터',
      title: '오리 날다',
      category: 'SUCCESS',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2735f0c691325efbd55cf18c75b',
      lyrics: '이렇게 멋진 날개를 펴 꿈을 꾸어요\n난 날아올라',
      start_time: '00:01:13',
      total_time: '00:03:46',
      youtube_path: 'https://youtu.be/sgnjnNI5ktQ?si=_yWXvVTOE6dmgKG_',
    },
    {
      artist: '우주소녀',
      title: '이루리',
      category: 'SUCCESS',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b27375a05a342311ea842c4deec6',
      lyrics: '이루리, 이루리, 라\n모두 다 이뤄질 거야',
      start_time: '00:01:00',
      total_time: '00:03:15',
      youtube_path: 'https://www.youtube.com/watch?v=2Q9G6R2hKIQ',
    },
    {
      artist: '아이오아이',
      title: 'Dream Girls',
      category: 'SUCCESS',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273822828be5f72a0cb4d13c017',
      lyrics: '시간은 충분해 조급해하지마\nTrust yourself 너 포기하지마',
      start_time: '00:01:03',
      total_time: '00:03:38',
      youtube_path: 'https://www.youtube.com/watch?v=8Zu_yO4pNEY',
    },
  ],
  health: [
    {
      artist: '하이키',
      title: '건물 사이에 피어난 장미',
      category: 'HEALTH',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b27396ee3a02b72db60d065f1dd4',
      lyrics: '고갤 들고 버틸게 끝까지',
      start_time: '00:00:57',
      total_time: '00:03:15',
      youtube_path: 'https://www.youtube.com/watch?v=vfUAckewh_8',
    },
    {
      title: '작전명 청-춘!',
      artist: '잔나비',
      category: 'HEALTH',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273834e69858ed0f1b4ccbe0188',
      lyrics: '결코 쓰러지진 않을 테니\n난 문제없어',
      start_time: '00:01:00',
      total_time: '00:03:58',
      youtube_path: 'https://www.youtube.com/watch?v=HrCCo-tFRgY',
    },
    {
      title: 'Girls Never Die',
      artist: 'tripleS',
      category: 'HEALTH',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2734b9eb26603f674ec91dcd545',
      lyrics: '끝까지 가볼래 포기는 안 할래\n난 쓰러져도 일어나',
      start_time: '00:00:24',
      total_time: '00:03:07',
      youtube_path: 'https://youtu.be/2tda_TCjz8w?si=xTs6CFK9FZfvD3ly',
    },
    {
      artist: '엑소',
      title: 'Power',
      category: 'HEALTH',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273c77e5477af193c0e7771e171',
      lyrics: 'Power Power 더 강해지는 걸',
      start_time: '00:00:45',
      total_time: '00:03:42',
      youtube_path: 'https://www.youtube.com/watch?v=sGRv8ZBLuW0',
    },
    {
      title: 'Stronger',
      artist: 'Kelly Clarkson',
      category: 'HEALTH',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273af384269742c6b04308c1be8',
      lyrics: "What doesn't kill you makes you stronger stand a little taller",
      start_time: '00:00:42',
      total_time: '00:03:41',
      youtube_path: 'https://www.youtube.com/watch?v=Xn676-fLq7I',
    },
  ],
  luck: [
    {
      artist: '우주소녀',
      title: '행운을 빌어',
      category: 'LUCK',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b27375a05a342311ea842c4deec6',
      lyrics: '꽉 잡아, lucky chance\n네꺼야, lucky strike 너의 행운을 빌어',
      start_time: '00:00:00',
      total_time: '00:03:21',
      youtube_path: 'https://www.youtube.com/watch?v=KFkVUdb4w5o',
    },
    {
      artist: '원필',
      title: '행운을 빌어 줘',
      category: 'LUCK',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2732ec585e31107f0e55ee205b7',
      lyrics: '아무쪼록 행운을 빌어 줘\n내 앞길에 행복을 빌어 줘',
      start_time: '00:00:55',
      total_time: '00:03:29',
      youtube_path: 'https://youtu.be/hrXCP0xeoA8?si=sZ8Gf7E8pDi9JUgI',
    },
    {
      artist: '페퍼톤스',
      title: '행운을 빌어요',
      category: 'LUCK',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2737e46d330530b121f55cfa4e5',
      lyrics: '행운을 빌어줘요\n웃음을 보여줘요',
      start_time: '00:01:10',
      total_time: '00:04:20',
      youtube_path: 'https://www.youtube.com/watch?v=U6dTSMCqlp4',
    },
    {
      title: 'Clover',
      artist: '더보이즈',
      category: 'LUCK',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2733ea369ee99ae2fb732fa92d9',
      lyrics: '너의 눈을 보고 있는 지금도\n그래, 넌 나의 행운이야',
      start_time: '00:01:05',
      total_time: '00:03:07',
      youtube_path: 'https://www.youtube.com/watch?v=l0AjBbZPHn0',
    },
    {
      artist: '세븐틴',
      title: 'Lucky',
      category: 'LUCK',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273595174aef621c2b6434ab343',
      lyrics: '우리 언제나 lucky, lucky',
      start_time: '00:01:01',
      total_time: '00:03:17',
      youtube_path: 'https://www.youtube.com/watch?v=a76e-un97-A',
    },
  ],
  wealth: [
    {
      artist: 'Bruno Mars',
      title: '24K Magic',
      category: 'WEALTH',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273232711f7d66a1e19e89e28c5',
      lyrics: '24 karat magic in the air',
      start_time: '00:00:32',
      total_time: '00:03:46',
      youtube_path: 'https://youtu.be/UqyT8IEBkvY?si=0s1TBTYAoUwZqMnI',
    },
    {
      title: '금금금',
      artist: '전소미',
      category: 'WEALTH',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2736adf6b9ff59d4b0a568a3896',
      lyrics: 'I got a lotta 금-금-금-금-금\n많아 금은보 and 화-화-화-화-화',
      start_time: '00:00:32',
      total_time: '00:02:29',
      youtube_path: 'https://youtu.be/H0Ugx2a_-tw?si=8BHKBxcYjnYML88H',
    },
    {
      artist: '김필',
      title: '돈벼락',
      category: 'WEALTH',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273d0d79303662fc4f30474d6f9',
      lyrics: '지갑에도 두둑 통장에도 두둑\n돈벼락 쏟아진다',
      start_time: '00:01:20',
      total_time: '00:03:06',
      youtube_path: 'https://youtu.be/oH9r_40cMmY?si=FOCwu_70ydG4to9o',
    },
    {
      title: '로또당첨송',
      artist: '썬차일드',
      category: 'WEALTH',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273ce32fbcfc2e04ad059af9b27',
      lyrics: '당첨된다 당첨된다\n로또 1등 당첨된다',
      start_time: '00:00:05',
      tag: 'LOTTO',
      total_time: '00:01:03',
      youtube_path: 'https://youtu.be/r6A2WHr1LGw?si=NbilKYoLZYYXxHUT',
    },
    {
      artist: '블락비',
      title: 'JACKPOT',
      category: 'WEALTH',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2739b5b9760a4d371d2253f4d6f',
      lyrics: '라 라라라랄라 터졌다 ja-ja-ja-jackpot',
      start_time: '00:01:14',
      total_time: '00:03:13',
      youtube_path: 'https://www.youtube.com/watch?v=83Yscg5vtVQ',
    },
  ],
  happiness: [
    {
      title: '너와의 모든 지금',
      artist: '재쓰비',
      category: 'HAPPINESS',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273732c97e6153efc730ed4dc67',
      lyrics: '쏟아지는 별빛들보다\n눈부시게 빛나고 있어',
      start_time: '00:01:02',
      total_time: '00:02:52',
      youtube_path: 'https://youtu.be/XV0lSvr0huU?si=o6rHiTiC3w7p6vdr',
    },
    {
      artist: '레드벨벳',
      title: '행복',
      category: 'HAPPINESS',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273ccd9a8fe25e9ae6039ac6ce6',
      lyrics: '한 방에 멋진 일이 가득, straight up',
      start_time: '00:00:21',
      total_time: '00:03:41',
      youtube_path: 'https://youtu.be/JFgv8bKfxEs?si=W0Jq30FR8Oub0bck&t=6',
    },
    {
      artist: 'YENA',
      title: 'SMILEY (Feat. BIBI)',
      category: 'HAPPINESS',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273a435b6276480ed558eece0fd',
      lyrics: "I'm gonna make it\nSmile, smile, smile away",
      start_time: '00:00:37',
      total_time: '00:02:53',
      youtube_path: 'https://youtu.be/y9kkXTucnLU?si=Ztc1kRVlBHihIcK9',
    },
    {
      artist: 'DAY6',
      title: 'Best Part',
      category: 'HAPPINESS',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b27380c0a2d0bf89e3707b6365c4',
      lyrics: '나에게 쥐어지는 매일이\nGonna be my Best part',
      start_time: '00:00:49',
      total_time: '00:03:41',
      youtube_path: 'https://youtu.be/a-UfQfufkgU?si=X2Oa9m3Jj95NTXp5',
    },
    {
      artist: 'NCT DREAM',
      title: '오르골 (Life Is Still Going On)',
      category: 'HAPPINESS',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273e6d118f2ad157bf0bbfb83cf',
      lyrics: '즐길 수 있으면 돼\n결국 행복하면 돼',
      start_time: '00:01:52',
      total_time: '00:03:38',
      youtube_path: 'https://youtu.be/8khwZ4Dql_k?si=OT95ILPGw8bRIw9S',
    },
  ],
  love: [
    {
      artist: '아이유',
      title: '내 손을 잡아',
      category: 'LOVE',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273f1efb467ac4c748630ffd22f',
      lyrics: '사랑이 온 거야 너와 나 말이야',
      start_time: '00:02:21',
      total_time: '00:03:15',
      youtube_path: 'https://www.youtube.com/watch?v=BYQBs_4-MOo',
    },
    {
      artist: '온앤오프',
      title: '사랑하게 될 거야',
      category: 'LOVE',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273f5c462d7e8e62123270bf72e',
      lyrics: '넌 날 사랑하게 될 거야',
      start_time: '00:00:40',
      total_time: '00:03:11',
      youtube_path: 'https://www.youtube.com/watch?v=oGTJkDWxR_s',
    },
    {
      artist: '유다빈밴드',
      title: '사포닌 같은 너',
      category: 'LOVE',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2734c31be0180de9db0426a4b17',
      lyrics: '너만을 비춰주는 starlight\n어디든 너를 향해 난 달려갈 거야',
      start_time: '00:00:45',
      total_time: '00:03:29',
      youtube_path: 'https://www.youtube.com/watch?v=TwN5oO4fdhE',
    },
    {
      artist: '나상현씨밴드',
      title: '찬란',
      category: 'LOVE',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273c1c786f4f6677d5ceffd86ed',
      lyrics: '함께 걸어갈 이 모든 순간의\n너와 내가 찬란하게 빛나길',
      start_time: '00:00:53',
      total_time: '00:03:06',
      youtube_path: 'https://youtu.be/S-yABpcMaQs?si=91eahkswsOR1myis',
    },
    {
      artist: '오마이걸',
      title: 'BUNGEE',
      category: 'LOVE',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b27318cb6dd4787e7db8569dba42',
      lyrics: '네 마음 위로 번지\n난 완벽하게 착지',
      start_time: '00:00:36',
      total_time: '00:02:57',
      youtube_path: 'https://www.youtube.com/watch?v=QTD_yleCK9Y',
    },
  ],
  courage: [
    {
      title: '다시 만난 세계',
      artist: '소녀시대',
      category: 'COURAGE',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2731111b7562b4b46870d27f98b',
      lyrics: '수많은 알 수 없는 길 속에\n희미한 빛을 난 쫓아가',
      start_time: '00:01:37',
      total_time: '00:04:25',
      youtube_path: 'https://youtu.be/0k2Zzkw_-0I?si=WymHQzrf1VRXq5ws',
    },
    {
      title: '돌덩이',
      artist: '하현우',
      category: 'COURAGE',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273a99b40ff1a1b414586c0b0a3',
      lyrics: '깎일수록 깨질수록\n더욱 세지고 강해지는 돌덩이',
      start_time: '00:01:04',
      total_time: '00:03:29',
      youtube_path: 'https://youtu.be/4qOT_Aw9IgM?si=G1t9fMxHFEctQ2ru',
    },
    {
      artist: '소녀시대',
      title: '힘 내!',
      category: 'COURAGE',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273aa7646e7aa8a4e001cb8a805',
      lyrics: '이것쯤은 정말 별거 아냐\n세상을 뒤집자',
      start_time: '00:00:35',
      total_time: '00:03:03',
      youtube_path: 'https://www.youtube.com/watch?v=_0Ke2fThnG0',
    },
    {
      artist: '전영호',
      title: 'Butter-Fly',
      category: 'COURAGE',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b273c87699ac1cf1800556129371',
      lyrics: '그래도 날아오를 거야 작은 날갯짓에\n꿈을 담아 조금만 기다려봐',
      start_time: '00:00:12',
      total_time: '00:04:36',
      youtube_path: 'https://youtu.be/c-2T-JnXEr8?si=k4-sGxHt910PKUea',
    },
    {
      artist: '아이즈원',
      title: 'FIESTA',
      category: 'COURAGE',
      cover_path:
        'https://i.scdn.co/image/ab67616d0000b2735ecba6eed6a9e14a7e9534b2',
      lyrics: 'Fiesta 내 맘에 태양을 꾹 삼킨 채\n영원토록 뜨겁게 지지 않을게',
      start_time: '00:01:05',
      total_time: '00:03:37',
      youtube_path: 'https://www.youtube.com/watch?v=eDEFolvLn0A',
    },
  ],
};
