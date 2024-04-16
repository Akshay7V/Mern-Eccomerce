import { User } from "../models/user.model.js";

export const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      res.json({ message: "Email and Password is required" });
    } else if (!email) {
      res.json({ message: "Email is required" });
    } else if (!password) {
      res.json({ message: "Password is required" });
    } else {
      const existuser = await User.findOne({ email });
      if (existuser) {
        res.json({ message: "User already existing!" });
      } else {
        const newUser = await User.create({
          email,
          password,
        });
        const { email: mail, _id } = newUser._doc;
        res.json({ mail, id: _id });
      }
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      res.json({ message: "Email and Password is required" });
    } else if (!email) {
      res.json({ message: "Email is required" });
    } else if (!password) {
      res.json({ message: "Password is required" });
    } else {
      if (!email && !password) {
        res.json({ message: "Email and Password is required" });
      } else if (!email) {
        res.json({ message: "Email is required" });
      } else if (!password) {
        res.json({ message: "Password is required" });
      }
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};
