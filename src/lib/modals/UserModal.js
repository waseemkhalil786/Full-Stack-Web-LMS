import { Provider } from "@radix-ui/react-toast";
import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullname: String,
    email: { type: String, required: true },
    provider: { type: String },
    profileImg: { type: String },
    password: { type: String },
    role: { type: String, default: "user" },
    gender: String,
    address: String,
  },
  { timestamps: true }
);

export const UserModal =
  mongoose.models.Users || mongoose.model("Users", userSchema);
