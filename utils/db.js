import mongoose from "mongoose";

const mongouri =
  "mongodb+srv://ssamyyy:UPDyxVdixF0ICR4C@cluster0.kt9o0.mongodb.net/?appName=Cluster0";
const connectDB = async () => {
  try {
    await mongoose.connect(mongouri);
    console.log("mongodb connected successfully.");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
