import { User } from "../models/user.model.js";

export const signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Both email and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = await User.create({ email, password });
    const { email: mail, _id: id } = newUser;

    res.status(201).json({ email: mail, id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Both email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Set user data in a cookie
    res.cookie('user', JSON.stringify({ email: user.email, id: user._id }), { httpOnly: true, maxAge: 3600000 }); // Expires in 1 hour

    // Send user data in response
    const { email: mail, _id: id } = user;
    res.status(200).json({ email: mail, id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const adminSignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Both email and password are required" });
    }

    const user = await User.findOne({ email, isAdmin: true });
    if (!user) {
      return res.status(404).json({ message: "Admin user not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const { email: mail, _id: id } = user;
    // Set admin data in a cookie
    res.cookie('user', JSON.stringify({ email: user.email, id: user._id, isAdmin: true }), { httpOnly: true, maxAge: 3600000 }); // Expires in 1 hour

    // Send admin data in response
    res.status(200).json({ email: mail, id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
