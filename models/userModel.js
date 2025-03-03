import mongoose from "mongoose";
import validator from "validator";
//schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [6, "Password length should be greater than 6 character"],
    },
    location: {
      type: String,
      default: "Nepal",
    },
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);
