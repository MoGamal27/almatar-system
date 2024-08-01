import mongoose, { Schema, Document} from "mongoose";

interface UserAttrs extends Document{
   name: string;
   email: string;
   password: string;
}

const UserSchema: Schema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const User = mongoose.model<UserAttrs>('User', UserSchema);

export default User;

