import express from 'express';
import mongoose from 'mongoose';
import flightRouter from './routes/flightRoutes';
import authRouter from './routes/authRoutes';
import bookingRouter from './routes/bookingRoutes';
import searchRoutes from './routes/searchRoutes';
import travelRouter from './routes/travelRoutes';


import dotenv from 'dotenv';

dotenv.config();

const app = express();


app.use(express.json());

// MongoDB Connection
const url: string = process.env.MONGO_URL || '';
mongoose.connect(url).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.log(err);
});



app.use('/api/flights', flightRouter);
app.use('/api/auth', authRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/search', searchRoutes);
app.use('/api/travel', travelRouter);


app.listen(5000, () => console.log('Server is running on port 5000'));