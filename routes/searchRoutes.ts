import express from 'express';
import { searchFlights, searchFlightsPrices, searchFlightsAvailability } from '../services/searchServices';

const searchRoutes = express.Router();

searchRoutes.get('/search-flights', searchFlights);
searchRoutes.get('/search-flights-prices', searchFlightsPrices);
searchRoutes.get('/search-flights-availability', searchFlightsAvailability);

export default searchRoutes;