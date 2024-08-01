import { Request, Response } from "express";
import Flight from "../models/flightModel";

const searchFlights = async (req: Request, res: Response) => {
    const { departureAirport, arrivalAirport, date} = req.body;
    try {
        const flights = await Flight.find({
            departureAirport,
            arrivalAirport,
            departureTime: { $gte: new Date(date) }
        });
        res.status(200).json(flights);
    } catch (err) {
        res.status(500).json(err);
    }
};

// search flights prices
const searchFlightsPrices = async (req: Request, res: Response) => {
    const { from, to, date } = req.query;
    try {
        const flights = await Flight.find({
            departureAirport: from,
            arrivalAirport: to,
            departureTime: date
        });
        res.status(200).json(flights);
    } catch (err) {
        res.status(500).json(err);
    }
};

// search flights availability
const searchFlightsAvailability = async (req: Request, res: Response) => {
     const { flightNumber, date } = req.query;
     try {
         const flights = await Flight.find({
             flightNumber,
             departureTime: date
         });
         res.status(200).json(flights);
     } catch (err) {
         res.status(500).json(err);
     }
 };


export { searchFlights, searchFlightsPrices, searchFlightsAvailability };

