import { Request, Response } from "express";
import Booking from "../models/bookingModel";


const createBooking = async (req: Request, res: Response) => {
    const { flightId, userId, seatNumber, bookingDate } = req.body;
    try {
        const newBooking = new Booking({
            flightId,
            userId,
            seatNumber,
            bookingDate: new Date()
        });
        await newBooking.save();
        res.status(200).json(newBooking);
    } catch (err) {
        res.status(500).json(err);
    }
};


// get user Booking 
const getBooking = async (req: Request, res: Response) => {
    try {
        const booking = await Booking.findById(req.params.id);
        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateBooking = async (req: Request, res: Response) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedBooking);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteBooking = async (req: Request, res: Response) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.status(200).json("Booking has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
};


export { createBooking, getBooking, updateBooking, deleteBooking };
