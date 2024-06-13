import Job from "../Models/jobModel.js";

export const getAllJobs = async (req, res) => {
    try {
        console.log("Req received...");
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addJob = async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json("Jobs added sucessfully");
    } catch (error) {
        console.log(error)
        res.status(400).json("Something went wrong while adding Job data");
    }
};

export const addMultipleJobs = async (req, res) => {
    try {
        const jobs = await Job.insertMany(req.body.jobs);
        res.status(201).json("Jobs added sucessfully");
    } catch (error) {
        console.log(error)
        res.status(400).json("Something went wrong while adding Jobs data");
    }
};
