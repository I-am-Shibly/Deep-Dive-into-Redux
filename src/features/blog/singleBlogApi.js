import { api } from '../../helper/api';

export const fetchBlog = async (id) => {
  const response = await api.get(`blogs/${id}`);
  return response.data;
};

export const doLike = async ({ likes, id }) => {
  const response = await api.patch(
    `blogs/${id}`,
    { likes },
    {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }
  );
  return response.data;
};
