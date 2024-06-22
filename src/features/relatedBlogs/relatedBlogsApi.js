import { api } from '../../helper/api';

export const fetchRelatedBlogs = async ({ tags, id }) => {
  const searchQueryString =
    tags.map((tag) => `tags_like=${tag}`).join('&') + `&id_ne=${id}`;

  const response = await api.get(`blogs?${searchQueryString}`);
  return response.data;
};
