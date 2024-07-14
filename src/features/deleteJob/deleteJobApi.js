import { api } from '../../utils/axiosInstance';

export const removeJob = async (id) => {
  const response = await api.delete(`jobs/${id}`);
  return response.data;
};
