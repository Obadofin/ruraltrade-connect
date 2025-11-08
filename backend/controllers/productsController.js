const db = require('../models/db');

exports.getAllProducts = (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.addProduct = (req, res) => {
  const { name, price, category, stock } = req.body;
  db.query(
    'INSERT INTO products (name, price, category, stock) VALUES (?, ?, ?, ?)',
    [name, price, category, stock],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Product added successfully!' });
    }
  );
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, category, stock } = req.body;
  db.query(
    'UPDATE products SET name=?, price=?, category=?, stock=? WHERE id=?',
    [name, price, category, stock, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Product updated successfully!' });
    }
  );
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM products WHERE id=?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Product deleted successfully!' });
  });
};
