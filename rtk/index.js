const store = require('./store');
const { fetchVideo } = require('./features/fetchVideo/fetchVideo');
const {
  fetchRelatedVideos,
} = require('./features/fetchRelatedVideos/relatedVideos');

store
  .dispatch(fetchVideo())
  .then((action) => {
    const firstVideo = action.payload;

    const searchQueryString = firstVideo?.tags
      .map((tag) => `tags_like=${tag}`)
      ?.join('&');

    store.dispatch(fetchRelatedVideos(searchQueryString));
  })
  .catch((err) => console.log('An error occured', err));
