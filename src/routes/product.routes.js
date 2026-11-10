
import { Router } from 'express';

import { productController } from '../controllers/product.controller.js';
import { validateProduct } from '../middlewares/validation.js';

const router = Router();

// GET: Advanced search (must be before /:id)
router.get('/search', productController.search);

// GET: Retrieve all products
router.get('/', productController.getAll);

// GET: Retrieve product by ID
router.get('/:id', productController.getById);

// POST: Create product with category (transaction)
router.post(
    '/with-category',
    productController.createWithCategory
);

// POST: Create product with existing category ID
router.post(
    '/',
    validateProduct,
    productController.create
);

// PUT: Complete product update
router.put(
    '/:id',
    validateProduct,
    productController.update
);

// PATCH: Update only product stock
router.patch('/:id/stock', productController.updateStock);

// PATCH: Partial product update
router.patch('/:id', productController.patch);

// DELETE: Remove product
router.delete('/:id', productController.remove);

export default router;
