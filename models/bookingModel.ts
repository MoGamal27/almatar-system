import mongoose, { Schema, Document} from "mongoose";

interface bookingAttrs extends Document {
    flightId: String,
    userId: String,
    seatNumber: Number,
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
    bookingDate:{
        type: Date,
        required: true
    }
})

const Booking = mongoose.model<bookingAttrs>('Booking', BookingSchema);

export default Booking;