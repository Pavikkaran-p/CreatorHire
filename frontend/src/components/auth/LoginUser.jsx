import React, { useState } from 'react';
import axios from 'axios';

const LoginUser = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/user/login', formData);
            console.log('Login successful:', response.data);
            // Redirect or perform other actions upon successful login
        } catch (error) {
            console.error('Login failed:', error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Login User</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginUser;
