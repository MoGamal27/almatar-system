import { Request, Response } from "express";
import Booking from "../models/bookingModel";
import Flight from "../models/flightModel";

const createBooking = async (req: Request, res: Response) => {
    const { flightId, userId, seatNumber, paymentIntentId} = req.body;
    try {

        const flight = await Flight.findById(flightId);
            if(!flight) {
                return res.status(404).json({ error: 'Flight not found' });
            }
        const newBooking = new Booking({
            flightId,
            userId,
            seatNumber,
            bookingDate: new Date()
        });
        
        // Create Payment
        const paumentIntent = await stripe.paymentIntents.create({
            amount: flight.price * 100, 
            currency: 'usd', 
            payment_method: paymentMethodId,
            confirmation_method: 'manual',
            confirm: true,
            metadata: {
            bookingId: newbooking._id.toString(),
            flightNumber: flight.flightNumber
      }
        })  

        newBooking.paymentIntentId = paumentIntent.id;
        await newBooking.save();

        res.json({ 
            success: true, 
            bookingId: booking._id,
            paymentIntentId: paymentIntent.id,
            status: paymentIntent.status 
          });
    } catch (err) {
        res.status(500).json(err);
    }
};


// get user Booking 
const getBooking = async (req: Request, res: Response) => {
    try {
        const booking = await Booking.findById(req.params.bookingId).populate('flightId');
        if (!booking) {
          return res.status(404).json({ error: 'Booking not found' });
        }
    
        const paymentIntent = await stripe.paymentIntents.retrieve(booking.paymentIntentId);
    
        res.json({
          bookingId: booking._id,
          flightNumber: booking.flightId.flightNumber,
          amount: paymentIntent.amount / 100, // Convert cents to dollars
          bookingDate: booking.bookingDate
        });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };


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
