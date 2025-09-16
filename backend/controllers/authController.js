const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// Token generator
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      username: user.username,
      state: user.state,
      area: user.area,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

// POST /api/auth/signup
const signup = async (req, res) => {
  const { username, email, password, role, state, area } = req.body;

  if (!username || !email || !password || !role || !state) {
    return res
      .status(400)
      .json({ message: "All fields except area are required" });
  }

  try {
    // ✅ Check for existing email
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // ✅ Check for existing username
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(409).json({ message: "Username already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
      state,
      area,
    });

    const token = generateToken(newUser);
    res.status(201).json({
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        state: newUser.state,
        area: newUser.area,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
};

// POST /api/auth/login
const login = async (req, res) => {
  const { username, password, role } = req.body; // ✅ Expect role from frontend

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // ✅ Check if role matches
    if (user.role !== role) {
      return res
        .status(403)
        .json({ message: "Access denied: Incorrect role selected" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    res.json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        state: user.state,
        area: user.area,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

module.exports = {
  signup,
  login,
};
