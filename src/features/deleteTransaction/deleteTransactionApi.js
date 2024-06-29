import { api } from '../../utils/api';

export const deleteTransaction = async (id) => {
  const response = await api.delete(`transactions/${id}`);
  return response.data;
};