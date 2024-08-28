import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';

const Home = () => {
    const [jobData, setJobData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('api/jobs/getAllJobs');
                const data = await response.json();
                setJobData(data);
                // if (data.length!=0) {
                // } else {
                //     throw new Error('Data format is incorrect');
                // }
            } catch (error) {
                // console.log(error)
                setError('Error fetching data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>
            <h1>Something went wrong</h1>
        </div>;
    }

    return (
        // <div className='flex gap-10 justify-center flex-wrap items-center py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            {jobData.length==0?<h1>No data found</h1> : jobData.map((job) => (
                <JobCard key={job._id} data={job} />
            ))}
        </div>
    );
};

export default Home;
