import jwt from 'jsonwebtoken';
import HR from '../Models/hrModel.js';

const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.hr = await HR.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).send({ message: 'Not authorized, token failed' });
        }
    }
    if (!token) {
        res.status(401).send({ message: 'Not authorized, no token' });
    }
};

export default protect;
