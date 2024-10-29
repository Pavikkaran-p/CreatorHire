import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginUser = () => {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/user/login', formData);
            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.token);
            navigate('/jobs')
            
        } catch (error) {
            setError(error.response?.data?.message || 'Login failed. Please try again.');
        }
    };
    
    const AuthHandler=async () => {
        try {
            const response = await axios.post('/api/auth/user/login', formData);
            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.token);
            navigate('/jobs')
            
        } catch (error) {
            setError(error.response?.data?.message || 'Login failed. Please try again.');
        }

    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-center text-black font-bold text-2xl ">Welcome back to</h2>
                <h1 className="mt-2 text-5xl font-bold mb-6 text-center text-blue-500">CreatorHire</h1>

                <div onClick={AuthHandler} className='my-4 mx-5'>
                    <h2 className=' text-center bg-black text-white rounded-2xl py-2'>Sign in with google</h2>
                </div>

                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-xl bg-gradient-to-b from-blue-400 to-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-700">Don't have an account yet? <Link to="/registeruser" className="text-blue-600 hover:text-blue-700 font-semibold">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginUser;
