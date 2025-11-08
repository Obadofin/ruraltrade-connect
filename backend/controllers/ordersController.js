const db = require('../models/db');

exports.getAllOrders = (req, res) => {
  db.query('SELECT * FROM orders', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.addOrder = (req, res) => {
  const { buyer_id, product_id, quantity, total_price } = req.body;
  db.query(
    'INSERT INTO orders (buyer_id, product_id, quantity, total_price) VALUES (?, ?, ?, ?)',
    [buyer_id, product_id, quantity, total_price],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Order placed successfully!' });
    }
  );
};
