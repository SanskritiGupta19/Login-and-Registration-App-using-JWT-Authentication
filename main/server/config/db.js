import mongoose from "mongoose";

const connectDB = async () => {
  const res = await mongoose.connect(
    "mongodb+srv://Harshit:Harshit@cluster0.zmxpbxl.mongodb.net/AuthApp"
  );
  if (res) {
    console.log("connected Successfully");
  }
};

export default connectDB;
