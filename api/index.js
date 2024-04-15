import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import userRouter from './routes/user.route.js'

const port = 3000;
const app = express();

dotenv.config();

app.listen(port, () => {
    console.log(`app listing at port ${port}`);
});

mongoose.connect(process.env.MONGODB).then(() => {
    console.log('MongoDB Database Connected');
}).catch((error) => {
    console.log('MongoDB Connection Error : ', error);
});

app.use(express.json());
app.use('/api/user',userRouter);