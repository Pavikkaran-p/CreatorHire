import React, { useEffect } from 'react';
import JobCard from '../components/JobCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, getAllJobs } from '../redux/dataSlice';

const Home = () => {
    const jobs = useSelector(getAllJobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJobs()); // Dispatch the fetchJobs action to fetch data when the component mounts
    }, [dispatch]);

    if (!Array.isArray(jobs)) {
        return <div>Loading...</div>; // Or any other loading indicator
    }

    return (
        <>
            <div className='flex gap-10 justify-center flex-wrap items-center py-10'>
                {jobs.map((job) => (
                    <JobCard key={job.id} data={job} />
                ))}
            </div>
        </>
    );
};

export default Home;
