import { Request, Response } from "express";
import Flight from "../models/flightModel";

const createFlight = async (req: Request, res: Response) => {
    const newFlight = new Flight(req.body);
    try {
        const savedFlight = await newFlight.save();
        res.status(200).json(savedFlight);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllFlights = async (req: Request, res: Response) => {
    try {
        const flights = await Flight.find();
        res.status(200).json(flights);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getFlight = async (req: Request, res: Response) => {
    try {
        const flight = await Flight.findById(req.params.id);
        res.status(200).json(flight);
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateFlight = async (req: Request, res: Response) => {
    try {
        const updatedFlight = await Flight.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedFlight);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteFlight = async (req: Request, res: Response) => {
    try {
        await Flight.findByIdAndDelete(req.params.id);
        res.status(200).json("Flight has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
};

export { createFlight, getAllFlights, getFlight, updateFlight, deleteFlight };