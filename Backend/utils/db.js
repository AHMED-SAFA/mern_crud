import mongoose from "mongoose";

const dbConnection = () => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
