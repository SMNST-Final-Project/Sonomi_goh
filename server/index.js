import express from 'express'; 
import bodyParser from 'body-parser';
import cors from 'cors'; 
import morgan from 'morgan'; 

import dotenv from 'dotenv'; 
dotenv.config(); 

import connectDB from './config/db.js';
import errorHandler from './middleware/errorHandler.js'

import usersRoutes from './routes/users.js'; 
import productsRoutes from './routes/products.js'; 
import cartRoutes from './routes/cart.js';
import ordersRoutes from './routes/orders.js'
import paymentRoutes from './routes/checkout-session.js'; 

const app = express(); 
const PORT = process.env.PORT || 5000

connectDB(); 
app.use(cors()); 

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));


app.use('/users', usersRoutes); 
app.use('/products', productsRoutes); 
app.use('/cart', cartRoutes); 
app.use('/orders', ordersRoutes);
app.use('/payment', paymentRoutes); 



app.use(errorHandler)


app.listen(PORT, () => console.log(`server up and running on port ${PORT}`))