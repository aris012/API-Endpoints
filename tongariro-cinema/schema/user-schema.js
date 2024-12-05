// We're getting the mongoose by importing it
import mongoose from "mongoose";

// Schema or model for MongoDB Atlas, attributes and data types.
const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },
  },
// Real-time input, returns the current date.
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("user", UserSchema);