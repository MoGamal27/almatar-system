import express from 'express';
import { createFlight, getAllFlights, getFlight, updateFlight, deleteFlight } from '../controller/flightController';
import  createFlightHold from '../services/holdFlightServices';

const flightRouter = express.Router();

flightRouter.post('/create-flight', createFlight);
flightRouter.post('/create-flight-hold', createFlightHold);
flightRouter.get('/get-flights', getAllFlights);
flightRouter.get('/:id', getFlight);
flightRouter.put('/:id', updateFlight);
flightRouter.delete('/:id', deleteFlight);

export default flightRouter;
