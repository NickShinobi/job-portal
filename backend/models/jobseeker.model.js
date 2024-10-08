import mongoose from "mongoose";

const JobSeekerSchema = new mongoose.Schema(
  {
    //username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const JobSeeker = mongoose.model("JobSeeker", JobSeekerSchema);

export default JobSeeker;
