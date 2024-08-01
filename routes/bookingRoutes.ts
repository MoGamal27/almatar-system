import express from 'express';
import { createBooking, getBooking, updateBooking, deleteBooking } from '../controller/bookingController';

const bookingRouter = express.Router();

bookingRouter.post('/create-booking', createBooking);
bookingRouter.get('/:id', getBooking);
bookingRouter.put('/:id', updateBooking);
bookingRouter.delete('/:id', deleteBooking);

export default bookingRouter;