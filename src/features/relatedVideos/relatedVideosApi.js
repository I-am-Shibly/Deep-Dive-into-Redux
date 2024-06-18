import { api } from '../../axios/axios';

export const fetchRelatedVideos = async ({ tags, id }) => {
  const searchQueryString =
    tags.map((tagItem) => `tags_like=${tagItem}`).join('&') + `&id_ne=${id}`;
  const response = await api.get(`videos?${searchQueryString}`);
  return response;
};
