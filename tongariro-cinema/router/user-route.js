// Create Endpoints for User Management
// Route is a way to define how an application responds to client requests for specific endpoints. Each route can handle HTTP methods like GET, POST, PUT, DELETE
import { Router } from "express";
import {
  POST,
  GET,
  GETID,
  UPDATE,
  DELETE,
} from "../controllers/user-controller.js";
const userRoutes = Router();

// POST METHOD CREATE USER
userRoutes.post("/", POST); 

// GET METHOD GET ALL USER OR DATA FROM DB
userRoutes.get("/", GET); 

// GET BY ID . GET USER BY ID
userRoutes.get("/:id", GETID);

// PUT METHOD UPDATE YOUR DATA OR EDIT
userRoutes.put("/:id", UPDATE); 

// DELETE METHOD DELETE USER BY ID
userRoutes.delete("/:id", DELETE); 

export default userRoutes;