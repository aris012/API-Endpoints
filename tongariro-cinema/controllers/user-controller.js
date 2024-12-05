//controller is to handle business  logic
import { userModel } from "../schema/user-schema.js";

// Creating new User
// POST /users: Add a new user.
// POST Request
// POST is to modify or update resources.
export const POST = async (request, response) => {
  try {
    const { firstname, lastname, email, password, role } = request.body;
    const createUser = await userModel.create({
      firstname,
      lastname,
      email,
      password,
      role,
    });
    if (!createUser) {
      return response.status(400).send({ message: "error create" });
    }

    return response.status(200).send(createUser);
  } catch (e) {
    return response.status(500).send({ message: e.message });
  }
};

// Getting User
// GET /users: Retrieve a list of all users.
// Try and Catch, is like true or fasle argument, if true getting a respons of 200 if not you get a response of 500
// 200 response if no error
// 500 response for error
export const GET = async (request, response) => {
  try {
    const getAllUser = await userModel.find({});

    return response.status(200).send(getAllUser);
  } catch (e) {
    return response.status(500).send({ message: e.message });
  }
};

// Getting the user id 
// 404 response if the user's id is not found 
// 200 response if no error
// 500  response for error
export const GETID = async (request, response) => {
  try {
    const { id } = request.params;

    const findById = await userModel.findById(id);

    if (!findById) {
      return response.status(404).send({ message: "User not found" });
    }

    return response.status(200).send(findById);
  } catch (e) {
    return response.status(500).send({ message: e.message });
  }
};

// Updating user's data
// PUT /users/:id: Update user details.
// 400 response for error update
// 200 for no error
// 500 if there's and error

export const UPDATE = async (request, response) => {
  try {
    const { id } = request.params;
    const { firstname, lastname, email, password, role } = request.body;

    const updateUser = await userModel.findByIdAndUpdate(
      id,
      {
        firstname,
        lastname,
        email,
        password,
        role,
      },
      { new: true }
    );

    if (!updateUser) {
      return response.status(400).send({ message: "error update" });
    }

    return response.status(200).send(updateUser);
  } catch (e) {
    return response.status(500).send({ message: e.message });
  }
};

// Delete user
// Deleting user data by getting the user's id
// DELETE /users/:id: Remove a user.
// 400 response for error on deleteng a data
// 200  response for deleting

export const DELETE = async (request, response) => {
  try {
    const { id } = request.params;

    const deleteUserById = await userModel.findByIdAndDelete(id);

    if (!deleteUserById) {
      return response.status(400).send({ message: "delete error" });
    }

    return response.status(200).send({ message: "Deleted Successfully" });
  } catch (e) {
    return response.status(500).send({ message: e.message });
  }
};