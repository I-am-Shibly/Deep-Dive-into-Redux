const { videos } = require('../db.json');

console.log(videos);

module.exports = (req, res, next) => {
  if (req.method !== 'GET') {
    res.json({ message: 'Method is not allowed!' });
  }

  if (Object.keys(req.query).length > 0) {
    next();
    return;
  }

  res.json(videos[Math.floor(Math.random() * videos.length)]);
};
