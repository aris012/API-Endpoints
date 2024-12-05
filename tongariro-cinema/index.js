// Imported all the important functions needed for the API
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config.js";
import userRoutes from "./router/user-route.js";
import bookRoutes from "./router/booking-route.js";
import movieRoutes from "./router/movie-route.js";

// This is the code for the express dependecy we downloaded
const app = express();

app.use(cors());
app.use(express.json());
// Routes, for API url this is how get, post, put, and delete.
app.use("/userRoutes", userRoutes);
app.use("/bookRoutes", bookRoutes);
app.use("/movieRoutes", movieRoutes);

//I imported the mongoDB from .env file and port im going to use.
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`running port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });