import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ data }) => {
  return (
    <Link to={`/jobs/${data._id}`} className="block m-4">
      <div className="flex flex-col md:flex-row bg-white p-4 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
        {/* Uncomment and use the image if needed */}
        {/* <img className="w-24 h-24 rounded-2xl object-cover mr-4" src={image} alt="Job" /> */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-1">{data.title}</h3>
            <h3 className="text-gray-600 mb-1">{data.location}</h3>
            <h3 className="text-gray-600 mb-1">Founded in {data.foundedIn}</h3>
            <h3 className="text-gray-600 mb-1">Employees: {data.employeeCount}</h3>
            <h3 className="text-gray-600 mb-1">Tags: {data.jobTags.join(', ')}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
