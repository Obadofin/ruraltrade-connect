const db = require('../models/db');

exports.getAllBuyers = (req, res) => {
  db.query('SELECT * FROM buyers', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.addBuyer = (req, res) => {
  const { name, email, phone } = req.body;
  db.query(
    'INSERT INTO buyers (name, email, phone) VALUES (?, ?, ?)',
    [name, email, phone],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Buyer added successfully!' });
    }
  );
};
