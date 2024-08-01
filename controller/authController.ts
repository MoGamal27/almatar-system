import { Request, Response } from "express";
import User from "../models/userModel";

const register = async (req: Request, res: Response) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

export default { register };

