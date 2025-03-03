
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import morgan from 'morgan';
//files import
import connectDB from './config/db.js';
import testRoutes from './routes/testRoutes.js';
// dot env config
dotenv.config();

//mongo 
connectDB();

// rest object
const app=express();

//middleware
app.use(express.json());
app.use(cors())
app.use(morgan("dev"));
// routes
app.use('/api/v1/test', testRoutes);

//port 
const PORT=process.env.PORT||8080

//listen
app.listen(PORT,()=>{
    console.log(`Node server Running in ${process.env.DEV_MODE} Mode on port no ${PORT}`.bgCyan.white);
})