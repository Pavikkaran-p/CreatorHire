import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const port=process.env.PORT || 5500
const MONGO_URL=process.env.MONGO_URL;
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URL);
        console.log(`MongoDB Connected to host: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

export default connectDB;
