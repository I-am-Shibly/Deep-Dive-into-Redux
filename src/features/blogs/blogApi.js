import { api } from '../../helper/api';

export const fetchBlogs = async () => {
  const response = await api.get('blogs');
  return response.data;
};

