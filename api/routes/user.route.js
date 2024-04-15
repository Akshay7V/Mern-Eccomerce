import express from "express";

import { signIn, signUp } from "../controller/auth.controller.js";

const app = express();

app.post('/signup', signUp);
app.post('/signIn', signIn);

export default app;