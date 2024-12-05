// Create Endpoints for Booking
// Route is a way to define how an application responds to client requests for specific endpoints. Each route can handle HTTP methods like GET, POST, PUT, DELETE
import { Router } from "express";
import {
  POST,
  GET,
  GETID,
  UPDATE,
  DELETE,
} from "../controllers/booking-controller.js";
const bookingRoutes = Router();

// POST METHOD CREATE booking
bookingRoutes.post("/", POST); 

// GET METHOD GET ALL booking OR DATA FROM DB
bookingRoutes.get("/", GET); 

// GET BY ID . GET booking BY ID
bookingRoutes.get("/:id", GETID);

// PUT METHOD UPDATE YOUR DATA OR EDIT
bookingRoutes.put("/:id", UPDATE); 

// DELETE METHOD DELETE booking BY ID
bookingRoutes.delete("/:id", DELETE); 

export default bookingRoutes;