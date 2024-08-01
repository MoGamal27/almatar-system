import mongoose, { Schema, Document} from "mongoose";

interface flightAttrs extends Document {
  flightNumber: String,
  airline: String,
  departureAirport: String,
  arrivalAirport: String,
  departureTime: Date,
  arrivalTime: Date,
  price: Number,
  availableSeats: Number,
}

const FlightSchema: Schema = new Schema({
    flightNumber:{
        type: String,
        required: true
    },
    airline:{
        type: String,
        required: true
    },
    departureAirport:{
        type: String,
        required: true
    },
    arrivalAirport:{
        type: String,
        required: true
    },
    departureTime:{
        type: Date,
        required: true
    },
    arrivalTime:{
        type: Date,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    }
})

const Flight = mongoose.model<flightAttrs>('Flight', FlightSchema);

export default Flight;