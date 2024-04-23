import { Cart } from '../models/cart.model.js';
import { Product } from '../models/product.model.js';


export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export const getCartItems = async (req, res) => {
    try {
        const userData = req.cookies.user;
        if (!userData) {
            return res.status(401).json({ message: 'User unauthorized' });
        }

        const { id } = JSON.parse(userData);
        if (!id) {
            return res.status(401).json({ message: 'User unauthorized' });
        }

        const cart = await Cart.findOne({ userId: id });
        if (!cart) {
            return res.status(404).json({ message: 'User cart not found' });
        }

        const cartProducts = await Product.find({ _id: { $in: cart.cart } });
        res.json({ cartProducts });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};




export const addToCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const userData = req.cookies.user;
        const user = JSON.parse(userData);

        // Check if productId is provided and not undefined
        if (!productId) {
            return res.status(400).json({ message: 'Product ID is required' });
        }

        // Check if the user's cart exists
        let userCart = await Cart.findOne({ userId: user.id });

        if (!userCart) {
            // If the user's cart doesn't exist, create a new cart
            userCart = await Cart.create({ userId: user.id, cart: [productId] });
        } else {
            // If the user's cart exists, add the product to the cart
            userCart.cart.unshift(productId);
            await userCart.save(); // Save the updated cart
            // Populate the details of the products in the cart
            res.json('Product added to cart');

        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};