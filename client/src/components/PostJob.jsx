import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const PostJob = () => {
  const [title, setTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skillsNeeded, setSkillsNeeded] = useState([]);
  const [jobTags, setJobTags] = useState([]);

  const handleSubmit =async (e) => {
    e.preventDefault();

    const jobData = {
      title,
      jobDescription,
      skillsNeeded: skillsNeeded.split(',').map(skill => skill.trim()),
      jobTags: jobTags.split(',').map(tag => tag.trim()),
    };
    const res=await axios.post('/api/hr/addjob',jobData)
    console.log(res)
    console.log('Job Data:', jobData);
    toast.success("Job posted succesfully")
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className=" text-sm font-medium text-gray-700" htmlFor="title">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 py-2 block w-full rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter the job title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="jobDescription">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
            className="mt-1  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Describe the job responsibilities and requirements"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="skillsNeeded">
            Skills Needed
          </label>
          <input
            type="text"
            id="skillsNeeded"
            value={skillsNeeded}
            onChange={(e) => setSkillsNeeded(e.target.value)}
            required
            className="mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter required skills, separated by commas"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="jobTags">
            Job Tags (Optional)
          </label>
          <input
            type="text"
            id="jobTags"
            value={jobTags}
            onChange={(e) => setJobTags(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter job tags, separated by commas"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
