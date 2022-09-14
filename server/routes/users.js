import express from 'express'; 

import { verifyToken } from '../middleware/auth.js'

import { getUsers, login, signup, getUser, updateUser, deleteUser, getStats } from '../controllers/users.js';

const router = express.Router(); 

router.post('/signup', signup)
router.post('/login', login);

router.use(verifyToken); 

router.get('/stats', getStats); 
router.put('/:id', updateUser); 
router.get('/:id', getUser); 
router.delete('/:id', deleteUser); 

router.get('/', getUsers); 

export default router; 