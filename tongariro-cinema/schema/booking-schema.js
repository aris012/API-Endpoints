// We're getting the mongoose by importing it
import mongoose from "mongoose";

// Schema or model for MongoDB Atlas, attributes and data types.
const BookingSchema = new mongoose.Schema(
  {
    movieId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    seat: {
      type: String,
      required: true,
    },
    showtime: {
      type: String,
      required: true,
    },
  },
  
// Real-time input, returns the current date.
  {
    timestamps: true,
  }
);

export const bookingModel = mongoose.model("booking", BookingSchema);