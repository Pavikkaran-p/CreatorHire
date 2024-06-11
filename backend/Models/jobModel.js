import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    jobDescription: { type: String, required: true },
    skillsNeeded: { type: [String], required: true },
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    aboutCompany: { type: String, required: true },
    responsibilities: { type: [String], required: true },
    companyTechStack: { type: [String], required: true },
    foundedIn: { type: Number, required: true },
    employeeCount: { type: Number},
    jobTags: { type: [String] }
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
