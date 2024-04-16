import express from 'express';
import { addProduct } from '../controller/admin.controller.js';
import { adminSignIn } from '../controller/auth.controller.js';

const app = express();

app.post('/signin', adminSignIn);
app.post('/add-product', addProduct);
export default app;