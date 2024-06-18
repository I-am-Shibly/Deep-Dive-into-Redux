import { api } from '../../axios/axios';

export const fetchSingleVideo = async (videoId) => {
  const response = await api.get(`videos/${videoId}`);
  return response.data;
};
