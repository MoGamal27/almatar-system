import { Request, Response } from "express";
import Flight from "../models/flightModel";

// create flight hold

const createFlightHold = async (req: Request, res: Response) => {
    const { flightId, seats } = req.body;
    try {
      const flight = await Flight.findById(flightId);
      if (!flight) {
        return res.status(404).json({ error: 'Flight not found' });
      }
      if (flight.availableSeats < seats) {
        return res.status(400).json({ error: 'Not enough seats available' });
      }
      
      flight.availableSeats = (flight.availableSeats as number) - seats;
      await flight.save();
      res.json({ message: 'Seats held successfully', remainingSeats: flight.availableSeats });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while holding seats' });
    }
  };
  
  export default createFlightHold;