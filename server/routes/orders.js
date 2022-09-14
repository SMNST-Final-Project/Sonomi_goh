import express from 'express'; 

import { verifyToken } from '../middleware/auth.js';

import { createOrder, getUserOrder, getAllOrders, updateOrder, deleteOrder, getRevenue} from '../controllers/order.js'; 

const router = express.Router(); 

router.use(verifyToken); 

router.get('/stats', getRevenue); 


router.post('/', createOrder); 
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);
router.get('/:patron', getUserOrder);


router.get('/', getAllOrders);


export default router; 