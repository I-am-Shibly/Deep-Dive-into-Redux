import { api } from '../../utils/api';

export const editTransaction = async ({ id, data }) => {
  const response = await api.patch(`transactions/${id}`, { ...data });
  return response.data;
};
