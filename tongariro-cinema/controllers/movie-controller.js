// controller is to handle business logic
import { movieModel } from "../schema/movie-schema.js";

// Creating new movie listing
// POST /movies: Add a new movie.
// POST Request
// POST is to modify or update resources.
export const POST = async (request, response) => {
    try {
        const { title, genre, rating, releaseDate } = request.body;
        const createMovie = await movieModel.create({
            title,
            genre,
            rating,
            releaseDate,
        });
        if (!createMovie) {
            return response.status(400).send({ message: "error created"});
        }
        return response.status(200).send(createMovie);
    } catch (e) {
        return response.status(500).send({ message: e.message});
    }
};

// Getting Movie
// GET /Movies: Retrieve a list of all Movies.
// Try and Catch, is like true or fasle argument, if true getting a respons of 200 if not you get a response of 500
// 200 response if no error
// 500 response for error
export const GET = async (request, response) => {
    try {
        const getAllMovie = await movieModel.find({});

        return response.status(200).send(getAllMovie);
    } catch (e) {
        return response.status(500).send ({ message: e.message });
    }
};

export const GETID = async (request, response) => {
    try {
        const { id } = request.params;
        const findById = await movieModel.findById(id);

        if (!findById){
            return response.status(400).send({ message: "Movie not found"});
        }

        return response.status(200).send(findById);
    } catch (e) {
        return response.status(500).send({ message: e.message });
    }
};

// Updating movie's data
// PUT /movies/:id: Update movie details.
// 400 response for error update
// 200 for no error
// 500 if there's and error

export const UPDATE = async (request, response) => {
    try {
        const { id } = request.params;
        const { title, genre, rating, releaseDate } = request.body;

        const updateMovie = await movieModel.findByIdAndUpdate(
            id,
            {
                title, 
                genre, 
                rating, 
                releaseDate,
            },
            { new: true }
        );

        if (!updateMovie) {
            return response.status(400).send ({ message: "error update"});
        }

        return response.status(200).send(updateMovie);
    } catch (e) {
        return response.status(500).send({ message: e.message});
    }
};

// Delete movie
// Deleting movie data by getting the movie's id
// DELETE /movies/:id: Remove a movie.
// 400 response for error on deleteng a data
// 200  response for deleting

export const DELETE = async (request, response) => {
    try {
        const { id } = request.params;

        const deleteMovieById = await movieModel.findByIdAndDelete(id);

        if (!deleteMovieById){
            return response.status(400).send({ message: "error delete"});
        }

        return response.status(200).send({ message: "Deleted Successfully"});
    } catch (e) {
        return response.status(500).send({ message: e.message });
    }
};