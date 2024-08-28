import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const ProfileUpdateForm = () => {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        companyName: '',
        location: '',
        responsibilities: '',
        companyTechStack: '',
        foundedIn: '',
        employeeCount: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const response = await axios.put('/api/hr/updateProfile', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Profile updated:', response.data);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" />
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
            <input type="text" name="responsibilities" value={formData.responsibilities} onChange={handleChange} placeholder="Responsibilities (comma separated)" />
            <input type="text" name="companyTechStack" value={formData.companyTechStack} onChange={handleChange} placeholder="Company Tech Stack (comma separated)" />
            <input type="number" name="foundedIn" value={formData.foundedIn} onChange={handleChange} placeholder="Founded In" />
            <input type="text" name="employeeCount" value={formData.employeeCount} onChange={handleChange} placeholder="Employee Count" />
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default ProfileUpdateForm;