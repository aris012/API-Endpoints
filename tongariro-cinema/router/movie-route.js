// Create Endpoints for Movie Listing
// Route is a way to define how an application responds to client requests for specific endpoints. Each route can handle HTTP methods like GET, POST, PUT, DELETE
import { Router } from "express";
import {
  POST,
  GET,
  GETID,
  UPDATE,
  DELETE,
} from "../controllers/movie-controller.js";
const movieRoutes = Router();
// POST METHOD CREATE movie
movieRoutes.post("/", POST); 

// GET METHOD GET ALL movie OR DATA FROM DB
movieRoutes.get("/", GET); 

// GET BY ID . GET movie BY ID
movieRoutes.get("/:id", GETID); 

// PUT METHOD UPDATE YOUR DATA OR EDIT
movieRoutes.put("/:id", UPDATE); 

// DELETE METHOD DELETE movie BY ID
movieRoutes.delete("/:id", DELETE); 

export default movieRoutes;