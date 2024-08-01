import express from 'express';
import { createFlight, getAllFlights, getFlight, updateFlight, deleteFlight } from '../controller/flightController';

const flightRouter = express.Router();

flightRouter.post('/create-flight', createFlight);
flightRouter.get('/get-flights', getAllFlights);
flightRouter.get('/:id', getFlight);
flightRouter.put('/:id', updateFlight);
flightRouter.delete('/:id', deleteFlight);

export default flightRouter;
