const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const createToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are not required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "Email Already Registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "patient",
    });

    res.status(201).json({
      message: "Registration successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Registration Failed",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and Password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid Email or Password",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid Email or Password",
      });
    }

    const token = createToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Login Failed",
    });
  }
};

const getMe = async (req,res) => {
   try {
    const user = req.user;

    if(!user){
      return res.status(401).json({
        message: "Not authenticated"
      })
    }

    res.status(200).json({
      user:{
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
    });
   } catch (error) {
      console.error("Get Me Error", error);

      res.status(500).json({
        message: "Failed to get Profile",
      });
   }
};

const logout = (req, res) => {
  req.clearCookie("token");

  res.json({
    message: "Logout successful",
  });
};

module.exports = { register, login, logout, getMe };
