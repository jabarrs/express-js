const router = require('express').Router();
const path = require('path');

router.get('/', (req, res, next) => {
  const { page, total } = req.query;
  res.send({
    status: 'Success',
    message: 'Welcome to Express JS Tutorial',
    page,
    total,
  });
});

router.get('/product/:id', (req, res) => {
  res.json({
    id: req.params.id,
  });
});

router.get('/product/', (req, res) => {
  const name = 'Baju';
  const price = 100000;
  const stock = 10;
  res.json({
    name,
    price,
    stock,
  });
});

module.exports = router;
