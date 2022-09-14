import express from 'express'; 

import { verifyToken } from '../middleware/auth.js';

import { createCart, getCart, getCarts, updateCart, deleteCart } from '../controllers/cart.js';

const router = express.Router(); 

router.use(verifyToken); 

router.post('/', createCart); 
router.get('/:userId', getCart); 
router.get('/', getCarts); 
router.put('/:id', updateCart); 
router.delete('/:id', deleteCart); 

export default router; 