import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    // jobId: { type: String, default: shortid.generate, unique: true, maxlength: 6 },
    
    title: { type: String, required: true },
    jobDescription: { type: String, required: true },
    skillsNeeded: { type: [String], required: true },
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    responsibilities: { type: [String], required: true },
    companyTechStack: { type: [String], required: true },
    foundedIn: { type: Number, required: true },
    employeeCount: { type: String },
    jobTags: { type: [String] }
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
