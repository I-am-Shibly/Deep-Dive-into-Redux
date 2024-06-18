import { api } from '../../axios/axios';

export const fetchTags = async () => {
  const response = await api.get('tags');
  return response.data;
};
