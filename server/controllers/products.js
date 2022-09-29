import Product from '../models/Product.js';

/**
 * @method - POST
 * @param - /products
 * @description - Add new item
 * @access Private
 */


export const addProduct = async (req, res) => {
    const newProduct = new Product(req.body)


    try {
        await newProduct.save(); 
        res.status(201).send(newProduct); 
    } catch (error) {
        res.status(500).send({ message: error.message }); 
    }
}; 

/**
 * @method - PUT
 * @description - update product
 * @param - /products/:id
 * @access Private
 */

export const updateProduct = async (req, res) => {
    const id = req.params.id 
    
    try {
        const product = await Product.findByIdAndUpdate(id, {$set: req.body}, {new: true}); 
        if (!product) {
            res.status(404).send({ message: `Product ${id} not found`});
            return; 
        }
        res.status(200).send(product); 

    } catch (error) {
        res.status(400).send({ message: error.message }); 
    }

}; 

/**
 * @method - DELETE
 * @description - delete product
 * @param - /products/:id
 * @access Private
 */

export const deleteProduct = async (req, res) => {
    const id = req.params.id; 

    try {
        await Product.findByIdAndDelete(id); 
            res.status(200).send({ message: `Product ${id} deleted`})
    } catch (error) {
        res.status(500).send({ message: error.message }); 
    }
}; 

/**
 * @method - GET
 * @param - /products/:id
 * @description - Get item by id
 * @access Public
 */

export const getProduct = async(req, res) => {
    const id = req.params.id; 

    try {

        const product = await Product.findById(id); 
        if (!product) {
            res.status(404).send({ message: `Product ${id} is not found`}); 
            return; 
        }
        res.status(200).send(product); 

    } catch (error) {
        res.status(400).send({ message: 'Error fetching the product' }); 
    }
}


/**
 * @method - GET
 * @param - /products
 * @description - Get all products
 * @access Private
 */

export const getProducts = async (req, res) => {
    console.log(req.query)
    const queryCategory = req.query.category; 

    try {
        let products = []; 

        if (queryCategory) {
           products = await Product.find({
            categories: {
                $in: [queryCategory]
            },
            });
        
        }
        if (!products.length) products = await Product.find().sort({ createdAt: -1 }).limit(8);
        
        res.status(200).send(products); 

    } catch (error) {
        res.status(400).send({ message: 'Error fetching products'})
    }
}