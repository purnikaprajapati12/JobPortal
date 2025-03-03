// const mongoose= require('mongoose')
// const dotenv = require('dotenv')
// const colors = require('colors');
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
const connectDB= async()=>{

    try {
        const conn =await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server Connected to Mongo DB ${mongoose.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`MongoDB Error ${error}`.bgRed.white)
    }
};

export default connectDB;