import { api } from '../../utils/axiosInstance';

export const addJob = async ({data}) => {
  const response = await api.post('jobs', { ...data });
  return response.data;
};
