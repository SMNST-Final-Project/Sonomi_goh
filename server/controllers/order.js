import Order from '../models/Order.js';


/**
 * @method - POST
 * @param - /orders
 * @description - Add new cart
 * @access Private
 */


export const createOrder = async (req, res) => {
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save(); 
        res.status(201).json(savedOrder); 
    } catch (error) {
        res.status(500).json(error); 
    }
}

/**
 * @method - PUT
 * @description - update order
 * @param - /orders/:id
 * @access Private
 */


export const updateOrder = async (req, res) => {
    const id = req.params.id 
    
    try {
        const updatedOrder = await Order.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(200).send(updatedOrder); 
    } catch (error) {
        res.status(400).send({ message: error.message }); 
    }

}; 

/**
 * @method - DELETE
 * @description - delete order
 * @param - /orders/:id
 * @access Private
 */

export const deleteOrder = async (req, res) => {
    const id = req.params.id; 

    try {
        await Order.findByIdAndDelete(id); 
            res.status(200).send({ message: `Order ${id} deleted`})
    } catch (error) {
        res.status(500).send({ message: error.message }); 
    }
}


/**
 * @method - GET
 * @param - /orders
 * @description - Get user Order
 * @access Private
 */

export const getUserOrder = async(req, res) => {
    // auth function attaches user object to res.body; 

    try {
        const orders = await Order.find({ patron: req.user.id }); 
        res.status(200).send(orders); 

    } catch (error) {
        res.status(400).send({ message: 'Error fetching order' }); 
    }
}

/**
 * @method - GET
 * @param - /orders
 * @description - Get all orders
 * @access Private
 */

export const getAllOrders = async (req, res) => {
    try {
        const orders =  Order.find();
        res.status(201).send(orders); 
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


/**
 * @method - GET
 * @param - /orders
 * @description - Get the last 30 days, and the previous 30 days total revenue; 
 * @access Private
 */

export const getRevenue = async (req, res) => {
    
    const date = new Date(); 
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1)); 
    const previousMonth = new Date (date.setMonth(lastMonth.getMonth() - 1)); 
    
    try {
        const revenue = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    income: '$bill'
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: '$income'},
                },
            },
        ]);
        console.log(revenue);
        res.status(200).json(revenue); 
    } catch (error) {
        res.status(500).json(error); 
    }
}