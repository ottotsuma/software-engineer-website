const express = require('express');
const path = require('path');
  const app = express();
  const isDev = process.env.NODE_ENV !== 'production';
  const PORT = process.env.PORT || 5000;
  const CacheTime = 86400 // 1 day
  // ('Cache-Control', 'public, max-age=2628000') // 31536000 1 year // 2628000 almost a month

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../build'),{
    maxAge: CacheTime
  }));

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.send('{"message":"Hello from the custom server!"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });