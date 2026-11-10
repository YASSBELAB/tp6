
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import productRoutes from './routes/product.routes.js';
import categoryRoutes from './routes/category.routes.js';
import authRoutes from './routes/authRoutes.js';

import { authenticate } from './middlewares/auth.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Global middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Product REST API - LAB 7'
    });
});

// LAB 6: Product routes (authentication required)
app.use('/api/products', authenticate, productRoutes);

// LAB 6: Category routes
app.use('/api/categories', categoryRoutes);

// LAB 7: Authentication routes
app.use('/api/auth', authRoutes);

// Global error handler (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
