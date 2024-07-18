import mongoose from 'mongoose';
import shortid from 'shortid';

const jobSchema = new mongoose.Schema({
    jobId: { type: String, default: shortid.generate, unique: true, maxlength: 6 },
    title: { type: String, required: true },
    jobDescription: { type: String, required: true },
    skillsNeeded: { type: [String], required: true },
    jobTags: { type: [String] }
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
