import express from "express";

import { signIn, signUp, signOut } from "../controller/auth.controller.js";
import { getAllProducts, addToCart, getCartItems } from "../controller/user.controller.js";

const app = express();

app.post('/signup', signUp);
app.post('/signIn', signIn);
app.get('/signout', signOut);
app.get('/get-products', getAllProducts);
app.post('/add-to-cart', addToCart);
app.get('/get-cart', getCartItems);

export default app;