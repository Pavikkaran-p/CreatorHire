import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const RegisterHr = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: ''
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/auth/hr/register', formData);
        console.log('HR registered successfully:', response.data.message);
        navigate('/login');
    } catch (error) {
        console.error('Error registering HR:', error);
    }
};

return (
    <div>
        <h2>HR Signup</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Username" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
            <button type="submit">Sign Up</button>
        </form>
    </div>
);
}

export default RegisterHr