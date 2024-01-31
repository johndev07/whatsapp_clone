import mongoose, { Schema, models, model } from "mongoose";
import { validateEmail } from "@/utils/validator";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    validate: [validateEmail, "invalid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide aassowrd"],
  },
  ForgotPasswordToken: String,
  ForgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExiry: Date,
});

const User = models.users || model("User", userSchema);

export default User;
