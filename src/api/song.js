import { client } from './client';

export const getSongList = async (cat, page, size) => {
  try {
    if (cat) {
      const res = await client.get(
        `/api/song/list?category=${cat.toUpperCase()}&page=${page}&size=${size}`
      );
      return res.data;
    } else {
      const res = await client.get(`/api/song/list?page=${page}&size=${size}`);
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};
