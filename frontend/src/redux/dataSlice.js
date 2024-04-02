import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobData: [
    {
        id: 3,
        companyName: "Data Insights Co.",
        title: "Data Analyst",
        time: "a day ago",
        location: "Remote",
        foundedIn: 2018,
        empCount: "50-100",
        description: "Analyze and interpret data to help drive business decisions and strategies.",
        tags: ["Data Analysis", "Remote Work", "Contract"]
    },
    {
        id: 4,
        companyName: "Customer Success Solutions",
        title: "Customer Support Specialist",
        time: "3 days ago",
        location: "Chicago, IL",
        foundedIn: 2012,
        empCount: "100-200",
        description: "Provide exceptional customer service and support to our clients.",
        tags: ["Customer Support", "Client Services", "Communication"]
    },
    {
        id: 5,
        companyName: "Tech Innovate",
        title: "Product Manager",
        time: "4 days ago",
        location: "Seattle, WA",
        foundedIn: 2008,
        empCount: "300-500",
        description: "Drive the product roadmap and collaborate with cross-functional teams to deliver innovative products.",
        tags: ["Product Management", "Innovation", "Cross-functional Collaboration"]
    },
    {
        id: 6,
        companyName: "Creative Designs Agency",
        title: "Graphic Designer",
        time: "5 days ago",
        location: "Los Angeles, CA",
        foundedIn: 2015,
        empCount: "50-100",
        description: "Create visually stunning designs for print and digital media.",
        tags: ["Graphic Design", "Freelance", "Creative"]
    },
    {
        id: 7,
        companyName: "HR Excellence Ltd.",
        title: "HR Manager",
        time: "a day ago",
        location: "Boston, MA",
        foundedIn: 2000,
        empCount: "500+",
        description: "Oversee all aspects of HR, including recruitment, training, and employee relations.",
        tags: ["HR", "Recruitment", "Employee Relations"]
    },
    {
        id: 8,
        companyName: "Sales Dynamics Inc.",
        title: "Sales Representative",
        time: "6 days ago",
        location: "Miami, FL",
        foundedIn: 2011,
        empCount: "200+",
        description: "Develop and maintain relationships with clients to drive sales and revenue.",
        tags: ["Sales", "Client Relationships", "Revenue Generation"]
    },
    {
        id: 9,
        companyName: "Content Creators Co.",
        title: "Content Writer",
        time: "a day ago",
        location: "Remote",
        foundedIn: 2017,
        empCount: "50-100",
        description: "Create engaging and informative content for our blog and social media channels.",
        tags: ["Content Writing", "Remote Work", "Blogging"]
    },
    {
        id: 10,
        companyName: "Financial Insights Group",
        title: "Financial Analyst",
        time: "7 days ago",
        location: "San Diego, CA",
        foundedIn: 2007,
        empCount: "300-500",
        description: "Analyze financial data and provide insights to support decision-making processes.",
        tags: ["Financial Analysis", "Decision Making", "Data Analysis"]
    },
    {
        id: 11,
        companyName: "Tech Support Solutions",
        title: "IT Support Specialist",
        time: "8 days ago",
        location: "Austin, TX",
        foundedIn: 2013,
        empCount: "100-200",
        description: "Provide technical support and troubleshooting for hardware and software issues.",
        tags: ["IT Support", "Troubleshooting", "Technical Support"]
    },
    {
        id: 12,
        companyName: "Project Management Pro",
        title: "Project Manager",
        time: "9 days ago",
        location: "Denver, CO",
        foundedIn: 2009,
        empCount: "200-300",
        description: "Lead project teams and ensure projects are completed on time and within budget.",
        tags: ["Project Management", "Team Leadership", "Budget Management"]
    }
],
  status:'idle',
  error:null,
};
export const fetchJobs=createAsyncThunk('jobs/fetchJobs',(req,res)=>{

})

export const dataSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addData(state, action) {
      state.jobData.push(...action.payload); 
    },
  },
//   extraReducers(builder){
//     builder.addCase('')
//   }
});

export const getAllJobs =(state) => state.jobs.jobData
export const { addData } = dataSlice.actions;

export default dataSlice.reducer;
