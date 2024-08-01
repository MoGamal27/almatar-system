import express from 'express';
import searchFlight from '../utils/searchFlight';

const roundTripFlight = async (req: express.Request, res: express.Response) => {
    const { from, to, date } = req.body;
    try {
        const flights = await searchFlight(from, to, new Date(date));
        res.status(200).json(flights);
    } catch (err) {
        res.status(500).json(err);
    }
};

const oneWayFlight = async (req: express.Request, res: express.Response) => {
    const { from, to, departDate, returnDate } = req.body;
    try {
      const departFlights = await searchFlight(from, to, new Date(departDate));
      const returnFlights = await searchFlight(to, from, new Date(returnDate));
        res.status(200).json({
        departFlights: departFlights,
        returnFlights: returnFlights
        });
    } catch (err) {
        res.status(500).json(err);
    }
};

const multiCityFlight = async (req: express.Request, res: express.Response) => {
    const { from, to, date} = req.body;
    try {
        const flights = await searchFlight(from, to, new Date(date));
        res.status(200).json(flights);
    } catch (err) {
        res.status(500).json(err);
    }
};

export { roundTripFlight, oneWayFlight, multiCityFlight };
