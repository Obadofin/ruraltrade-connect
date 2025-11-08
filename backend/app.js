require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const artisanRoutes = require('./routes/artisansRoutes');
const buyerRoutes = require('./routes/buyersRoutes');
const productRoutes = require('./routes/productsRoutes');
const orderRoutes = require('./routes/ordersRoutes');
const analyticRoutes = require('./routes/analyticRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/artisans', artisanRoutes);
app.use('/api/buyers', buyerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/analytics', analyticRoutes);

app.get('/', (req, res) => res.send('RuralTrade Connect API'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
