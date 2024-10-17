"use server";
import mongoose from "mongoose";

let isConnected = false; //check connection status
export const connectDb = async () => {
    mongoose.set('strictQuery', true);
    if (!process.env.MONGODB_URL) {
        throw new Error('MongoDB URI is missing');
    }
    if (isConnected) {
        console.log('Already Connected to DB');
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log('Connected to DB');
    } catch (error) {
        console.log('Error connecting to DB', error);
    }
};