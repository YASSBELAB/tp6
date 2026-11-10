
import express from 'express';
import 'dotenv/config';

import productRoutes from './routes/product.routes.js';
import categoryRoutes from './routes/category.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();
const PORT = process.env.PORT || 3000;

// JSON middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Product REST API - TP6'
  });
});

// Product routes
app.use('/api/products', productRoutes);

// Category routes
app.use('/api/categories', categoryRoutes);

// Global error handler (must be after routes)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
