import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    userId: String,
    cart: {
        type: Array,
        default: []
    }
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);

export { Cart };