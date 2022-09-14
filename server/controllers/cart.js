import Cart from '../models/Cart.js';


/**
 * @method - POST
 * @param - /cart
 * @description - Add new cart
 * @access Private
 */


export const createCart = async (req, res) => {
    const newCart = new Cart(req.body)

    try {
        await newCart.save(); 
        res.status(201).send(newCart); 
    } catch (error) {
        res.status(500).send({ message: error.message }); 
    }
}

/**
 * @method - PUT
 * @description - update cart
 * @param - /cart/:id
 * @access Private
 */

export const updateCart = async (req, res) => {
    const id = req.params.id 
    
    try {
        const updatedCart = await Cart.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.status(200).json(updatedCart); 
    } catch (error) {
        res.status(400).send({ message: error.message }); 
    }

};

/**
 * @method - DELETE
 * @description - delete cart
 * @param - /cart/:id
 * @access Private
 */


export const deleteCart = async (req, res) => {
    const id = req.params.id; 

    try {
        await Cart.findByIdAndDelete(id); 
            res.status(200).send({ message: `Cart ${id} deleted`})
    } catch (error) {
        res.status(500).send({ message: error.message }); 
    }
}

/**
 * @method - GET
 * @param - /cart
 * @description - Get user Cart
 * @access Public
 */

export const getCart = async(req, res) => {
    // auth function attaches user object to res.body; 

    try {
        const cart = await Cart.findOne({ userId: req.user.id }); 
        res.status(200).json(cart); 

    } catch (error) {
        res.status(400).send({ message: 'Error fetching cart' }); 
    }
}

/**
 * @method - GET
 * @param - /cart
 * @description - Get all carts
 * @access Private
 */

export const getCarts = async (req, res) => {
    try {
        const carts =  Cart.find();
        res.status(201).json(carts); 
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}





