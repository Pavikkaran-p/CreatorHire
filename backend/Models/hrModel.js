import mongoose from 'mongoose';

const { Schema } = mongoose;

const hrSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
    },
    location: {
        type: String,
    },
    responsibilities: {
        type: [String],
    },
    companyTechStack: {
        type: [String],
    },
    foundedIn: {
        type: Number,
    },
    employeeCount: {
        type: String
    },
    jobsPosted: [{
        type: Schema.Types.ObjectId,
        ref: 'Job'
    }]
}, { timestamps: true });

const HR = mongoose.model('HR', hrSchema);
export default HR;
