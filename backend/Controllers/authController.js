import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/userModel.js';
import HR from '../Models/hrModel.js';
import dotenv from 'dotenv'
dotenv.config()

export const registerUser = async (req, res) => {
    try {
        console.log(req.body)
        const { username, email, password } = req.body;
        
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword)
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const jwttoken=process.env.JWT_SECRET;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user._id }, jwttoken, { expiresIn: '30d' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const registerHR = async (req, res) => {
    try {
        const { name,email, password } = req.body;

        const existingHR = await HR.findOne({ email });
        if (existingHR) {
            return res.status(400).json({ message: 'HR already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newHR = new HR({name, email, password: hashedPassword });
        await newHR.save();

        res.status(201).json({ message: 'HR registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const loginHR = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hr = await HR.findOne({ email });
        if (!hr) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, hr.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ hrId: hr._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
