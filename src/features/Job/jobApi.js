import { api } from '../../utils/axiosInstance';

export const fetchAjob = async (id) => {
  const response = await api.get(`jobs/${id}`);
  return response.data;
};