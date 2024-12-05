
import { bookingModel } from "../schema/booking-schema.js"

// Creating new booking
// POST /bookings: Add a new booking.
// POST Request
// POST is to create resources.
export const POST = async (request, response) => {
    try {
        const { movieId, userId, seat, showtime } = request.body;
        const createBooking = await bookingModel.create({
            movieId, 
            userId, 
            seat, 
            showtime,
        });
        if (!createBooking) {
            return response.status(400).send({ message: "error create"});
        }

        return response.status(200).send(createBooking);
    } catch (e) {
        return response.status(500).send({ message: e.message });
    }
};

// Getting booking
// GET /bookings: Retrieve a list of all bookings.
// Try and Catch, is like true or fasle argument, if true getting a respons of 200 if not you get a response of 500
// 200 response if no error
// 500 response for error
export const GET = async (request, response) => {
    try {
        const getAllBooking = await bookingModel.find({});

        return response.status(200).send(getAllBooking);
    } catch (e) {
        return response.status(500).send({ message: e.message });
    }
};


// Getting the booking id 
// 404 response if the booking's id is not found 
// 200 response if no error
// 500  response for error
export const GETID = async (request, response) => {
    try {
        const { id } = request.params;

        const findById = await bookingModel.findById(id);

        if (!findById) {
            return response.status(400).send({ message: "Booking not found"});
        }

        return response.status(200).send(findById);
    } catch (e) {
        return response.status(500).send({ message: e.message });
    }
};


// Updating booking's data
// PUT /bookings/:id: Update booking details.
// modify or update
// 400 response for error update
// 200 for no error
// 500 if there's and error
export const UPDATE = async (request, response) => {
    try {
        const { id } = request.params;
        const { movieId, bookingId, seat, showtime } = request.body;

        const updateBooking = await bookingModel.findByIdAndUpdate(
            id,
            {
                movieId, 
                userId, 
                seat, 
                showtime,
            },
            { new: true }
        );

        if (!updateBooking) {
            return response.status(400).send({ message: "error update"});
        }
        return response.status(200).send(updateBooking);
    } catch (e) {
        return response.status(500).send({ message: e.message });
    }
};

// Delete booking
// Deleting booking data by getting the booking's id
// DELETE /bookings/:id: Remove a booking.
// 400 response for error on deleteng a data
// 200  response for deleting
export const DELETE = async (request, response) => {
    try {
        const { id } = request.params;

        const deleteBookingById = await bookingModel.findByIdAndDelete(id);

        if (!deleteBookingById) {
            return response.status(400).send({ message: "delete error"});
        }

        return response.status(200).send({ message: "Deleted Successfully" });
    } catch (e) {
        return response.status(500).send({ message: e.message });
    }
};