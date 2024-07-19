import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`/api/jobs/getjob/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setJob(response.data);
            } catch (err) {
                setError('Failed to fetch job details.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchJobDetails();
    }, [id]);

    const applyHandler=()=>{
        toast.success("Application sent sucessfully");
    }
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-xl font-bold">Loading...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-xl text-red-500">{error}</h1>
            </div>
        );
    }

    if (!job) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-xl text-gray-500">Job not found</h1>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl">
                <h2 className="text-3xl font-bold mb-6">Job Details</h2>
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <h3 className="text-lg font-semibold">Company Name</h3>
                    <p className="text-gray-600">{job.companyName}</p>
                </div>
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-600">{job.location}</p>
                </div>
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <h3 className="text-lg font-semibold">Description</h3>
                    <p className="text-gray-600">{job.description}</p>
                </div>
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <h3 className="text-lg font-semibold">Requirements</h3>
                    <div className="flex flex-wrap">
                        {job.skillsNeeded.map((requirement, index) => (
                            <span key={index} className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                                {requirement}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <h3 className="text-lg font-semibold">Responsibilities</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                        {job.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                </div>
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <h3 className="text-lg font-semibold">Company Tech Stack</h3>
                    <div className="flex flex-wrap">
                        {job.companyTechStack.map((tech, index) => (
                            <span key={index} className="bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            <button 
            onClick={applyHandler}
             type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Apply now</button>
            </div>
            <ToastContainer autoClose={1200} />
        </div>
    );
};

export default JobDetails;
