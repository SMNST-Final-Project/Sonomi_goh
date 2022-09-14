import express from 'express'; 
import { createCheckoutSession } from '../controllers/checkout-session.js';
const router = express.Router(); 



router.post('/', createCheckoutSession); 

export default router; 