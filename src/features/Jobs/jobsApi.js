import { api } from '../../utils/axiosInstance';

export const fetchJobs = async () => {
  const response = await api.get('jobs');
  return response.data;
};
