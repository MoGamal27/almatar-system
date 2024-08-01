import Flight from "../models/flightModel";
import { Request, Response } from "express";

async function searchFlight(departureAirport: string, arrivalAirport: string, date: Date) {
    return await Flight.find({
        departureAirport,
        arrivalAirport,
        departureTime: { $gte: new Date(date) }
    })
}

export default searchFlight;