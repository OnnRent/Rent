// Routes/ProductRouter.js
import express from 'express';
import { createProduct, getProducts, updateProduct, deleteProduct , bookProduct , getBestSellers} from '../Controllers/ProductController.js';
import ensureAuthenticated from '../Middlewares/ensureAuthenticated.js';

const router = express.Router();

router.post('/', ensureAuthenticated, createProduct); // Protect this route
router.get('/', getProducts);
router.put('/:id', ensureAuthenticated, updateProduct); // Protect this route
router.delete('/:id', ensureAuthenticated, deleteProduct); // Protect this route
router.post('/book', ensureAuthenticated, bookProduct); // Protect this route and add booking functionality
router.get('/bestsellers', getBestSellers);


export default router;
