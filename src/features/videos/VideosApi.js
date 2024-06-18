import { api } from '../../axios/axios';

export const fetchVideos = async () => {
  const response = await api.get('videos');
  return response.data;
};
