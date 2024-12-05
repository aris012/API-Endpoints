// We're getting the mongoose by importing it
import mongoose from "mongoose";

// Schema or model for MongoDB Atlas, attributes and data types.
const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },

    releaseDate: {
      type: String,
      required: true,
    },
  },
// Real-time input, returns the current date.
  {
    timestamps: true,
  }
);

export const movieModel = mongoose.model("movie", MovieSchema);