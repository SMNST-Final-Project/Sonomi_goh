import express from 'express'; 
import bodyParser from 'body-parser';

import dotenv from 'dotenv'; 
dotenv.config(); 

import cors from 'cors'; 
import morgan from 'morgan';


const app = express(); 
const PORT =  5000

//path for heroku
import path from "path";
import { fileURLToPath } from "url";


//db connect
import connectDB from './config/db.js';
import errorHandler from './middleware/errorHandler.js'


// it will get the name of my current running file that is server.js

const __filename = fileURLToPath(import.meta.url);

// server directory
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, "../client/build")))

connectDB(); 
app.use(cors()); 

//routes
import usersRoutes from './routes/users.js'; 
import productsRoutes from './routes/products.js'; 
import cartRoutes from './routes/cart.js';
import ordersRoutes from './routes/orders.js'
import paymentRoutes from './routes/checkout-session.js'; 


app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));


app.use('/users', usersRoutes); 
app.use('/products', productsRoutes); 
app.use('/cart', cartRoutes); 
app.use('/orders', ordersRoutes);
app.use('/payment', paymentRoutes); 

//error handlers
app.use(errorHandler)


app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "../client", "build", "index.html" ))
})

app.listen(PORT, () => console.log(`server up and running on port ${PORT}`))