import { client } from './client';

export const postWish = async (data) => {
  try {
    const res = await client.post(`/api/wish`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getRandomWish = async () => {
  try {
    const res = await client.get(`/api/wish/random?limit=4`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getRandomWishes = () => {
  return;
};
