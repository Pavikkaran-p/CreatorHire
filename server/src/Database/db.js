import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { createClient } from 'redis';
const redishost=process.env.REDIS_HOST_ID
const redispassword=process.env.REDIS_PASSWORD
dotenv.config()
const port=process.env.PORT || 5500
const MONGO_URL=process.env.MONGO_URL;
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URL);
        // console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

const client = createClient({
    password: redispassword,
    socket: {
        host: redishost,
        port: 10795
    }
});

export default connectDB;
