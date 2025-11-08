const db = require('../models/db');

exports.getOverview = (req, res) => {
  const sql = `
    SELECT
      (SELECT COUNT(*) FROM products) AS total_products,
      (SELECT COUNT(*) FROM buyers) AS total_buyers,
      (SELECT COUNT(*) FROM artisans) AS total_artisans,
      (SELECT COUNT(*) FROM orders) AS total_orders;
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

exports.salesByArtisan = (req, res) => {
  const sql = `
    SELECT a.id AS artisan_id, a.name AS artisan, SUM(o.total_price) AS total_sales
    FROM orders o
    JOIN products p ON o.product_id = p.id
    JOIN artisans a ON p.artisan_id = a.id
    GROUP BY a.id
    ORDER BY total_sales DESC;
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
