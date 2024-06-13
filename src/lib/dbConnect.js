import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
async function dbConnect() {
    const URI = process.env.MONGO_URI
    try {
        const db = await mongoose.connect(URI)
        console.log(db);
    } catch (error) {
        console.log(error);
    }
}

dbConnect()