import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`/api/jobs/getjob/${id}`, 
                // {
                //     headers: { Authorization: `Bearer ${token}` }
                // }
            );
                setJob(response.data);
            } catch (err) {
                setError('Failed to fetch job details.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchJobDetails();
    }, [id]);

    if (isLoading) {
        return <div className='mx-[50%] p-10 font-bold'><h1>
            Loading...
        </h1></div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!job) {
        return <div>Job not found</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Job Details</h2>
                <p className="text-gray-600 mb-4">Job ID: {id}</p>
                <div className="border-t border-gray-200 mt-4 pt-4">
                    <p className="text-lg font-semibold">Company Name</p>
                    <p className="text-gray-600">{job.company}</p>
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4">
                    <p className="text-lg font-semibold">Location</p>
                    <p className="text-gray-600">{job.location}</p>
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4">
                    <p className="text-lg font-semibold">Description</p>
                    <p className="text-gray-600">{job.description}</p>
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4">
                    <p className="text-lg font-semibold">Requirements</p>
                    <div className="flex flex-wrap">
                        {job?.requirements?.map((requirement, index) => (
                            <span key={index} className="bg-blue-200 text-blue-800 rounded-full px-2 py-1 text-sm mr-2 mb-2">
                                {requirement}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;