import express from "express";

import { signIn, signUp } from "../controller/auth.controller.js";
import { getAllProducts } from "../controller/user.controller.js";

const app = express();

app.post('/signup', signUp);
app.post('/signIn', signIn);
app.get('/get-products', getAllProducts);

export default app;