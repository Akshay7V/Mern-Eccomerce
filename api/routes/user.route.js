import express from "express";

import { signIn, signUp } from "../controller/auth.controller.js";
import { getAllProducts, addToCart } from "../controller/user.controller.js";

const app = express();

app.post('/signup', signUp);
app.post('/signIn', signIn);
app.get('/get-products', getAllProducts);
app.post('/add-to-cart', addToCart);

export default app;