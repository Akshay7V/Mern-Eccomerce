
import { User } from "../models/user.model.js";
export const signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existuser = await User.findOne({ email });
        if (existuser) {
            res.json({ message: 'User already existing!' });
        } else {
            const newUser = await User.create({
                email,
                password
            });
            res.json({ message: "New User Created Successfully", newUser });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const signIn = async (req, res) => {
    try {
        const data = req.body;
        const user = await User.findOne({ email: data.email });
        if (user) {
            if (user.password == data.password) {
                res.json({ message: "User Found", user });
            } else {
                res.json({ message: "incorrect passeord" });
            }
        } else {
            res.json({ message: "user not found " });
        }
    } catch (error) {
        res.json({ error: error.message });
    }
}