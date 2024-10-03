const express = require('express');
const cors = require('cors');
const app = express();
const products = require('./products.json');

app.use(cors());

app.get('/api/products', (req, res) => {
  res.json(products); // Send all products
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === (req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product); // Send specific product by ID
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
