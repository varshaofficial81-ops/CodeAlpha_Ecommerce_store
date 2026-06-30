const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require('./backend/routes/productRoutes');
app.use('/api/products', productRoutes);

const userRoutes = require('./backend/routes/userRoutes');
console.log('UserRoutes loaded:', typeof userRoutes);
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB Connected!')).catch((err) => console.log('MongoDB Error: ', err));
app.get('/', (req, res) => {
  res.send('E-commerce API is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

