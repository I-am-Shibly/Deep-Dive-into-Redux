import { api } from '../../utils/axiosInstance';

export const editJob = async ({ id, data }) => {
  const response = await api.patch(`jobs/${id}`, { ...data });
  return response.data;
};
