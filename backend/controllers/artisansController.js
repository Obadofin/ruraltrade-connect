const db = require('../models/db');

exports.getAllArtisans = (req, res) => {
  db.query('SELECT * FROM artisans', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.addArtisan = (req, res) => {
  const { name, skill, location } = req.body;
  db.query(
    'INSERT INTO artisans (name, skill, location) VALUES (?, ?, ?)',
    [name, skill, location],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Artisan added successfully!' });
    }
  );
};
