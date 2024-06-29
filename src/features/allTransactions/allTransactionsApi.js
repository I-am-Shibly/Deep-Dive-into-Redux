import { api } from '../../utils/api';

export const fetchAllTransctions = async () => {
  const response = await api.get('transactions');
  return response.data;
};
