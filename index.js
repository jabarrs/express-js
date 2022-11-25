const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes');

app.use(router);
app.use((req, res) => {
  res.status(404);
  res.send({
    status: 'failed',
    message: req.originalUrl + ' Not Found',
  });
});
app.listen(3000, () => console.log('Server http://localhost:3000'));
