import express from 'express'; 
import { verifyToken } from '../middleware/auth.js';

import { addProduct, updateProduct, deleteProduct, getProduct, getProducts } from '../controllers/products.js'

const router = express.Router(); 



router.get('/', getProducts);

router.use(verifyToken); 

router.post('/', addProduct);
router.put('/:id', updateProduct); 
router.delete('/:id', deleteProduct); 
router.get('/:id', getProduct); 

export default router; 

