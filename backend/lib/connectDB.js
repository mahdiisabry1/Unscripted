import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Database connection established");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
