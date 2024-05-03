import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rabby:Abc123456789$@cluster0.h46klhl.mongodb.net/food-delivery-app"
    )
    .then(() => console.log("DB connected"));
};
