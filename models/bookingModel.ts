import mongoose, { Schema, Document} from "mongoose";

interface bookingAttrs extends Document {
    flightId: String,
    userId: String,
    seatNumber: Number,
    paymentIntentId: String,
    bookingDate: Date
}

const BookingSchema: Schema = new Schema({
    flightId:{
     type: Schema.Types.ObjectId,
     ref: 'Flight'
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    seatNumber:{
        type: Number,
        required: true
    },
    paymentIntentId: {
        type: String,
        required: true
    },
    bookingDate:{
        type: Date
    }
})

const Booking = mongoose.model<bookingAttrs>('Booking', BookingSchema);

export default Booking;