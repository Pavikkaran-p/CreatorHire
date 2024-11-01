import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/userModel.js';
import HR from '../Models/hrModel.js';
import dotenv from 'dotenv';
dotenv.config();

export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
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
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.cookie('authtoken', token, {
            httpOnly: true, 
            secure: true 
            // httpOnly: true,
            // secure: process.env.NODE_ENV === 'production',
            // sameSite: 'strict',
            
            // maxAge: 30 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ message: 'Login successful',token:token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const registerHR = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingHR = await HR.findOne({ email });
        if (existingHR) {
            return res.status(400).json({ message: 'HR already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newHR = new HR({ name, email, password: hashedPassword });
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

        res.cookie('token', token, {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ message: 'Login successful',token: token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const verifyToken = async (req, res) => {
    try {
        const token = req.cookies.authtoken;
        
        if (!token) {
            return res.status(401).json({ message: 'No token provided, authorization denied' });
        }
        jwt.verify(token, process.env.JWT_SECRET);

        return res.status(200).json({ valid: true });
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

