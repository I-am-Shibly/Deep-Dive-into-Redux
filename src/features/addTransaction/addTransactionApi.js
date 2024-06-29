import { api } from '../../utils/api';

export const addNewTransaction = async (data) => {
  const response = await api.post('transactions', { ...data });
  return response.data;
};
