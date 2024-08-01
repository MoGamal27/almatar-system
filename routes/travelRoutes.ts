import express from 'express';
import { roundTripFlight, oneWayFlight, multiCityFlight } from '../services/travelServices';

const travelRouter = express.Router();

travelRouter.post('/round-trip-flight', roundTripFlight);
travelRouter.post('/one-way-flight', oneWayFlight);
travelRouter.post('/multi-city-flight', multiCityFlight);

export default travelRouter;