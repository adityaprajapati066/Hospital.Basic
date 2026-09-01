// const express = require('express');
// const connectDB = require("./config/bd");
// const cors = require('cors');
// const cookieParser = require('cookie-parser');

// const app = express();
// const PORT = process.env.PORT || 5000;

// const authRoutes = require("./routes/authRoutes");
// const appointmentRoutes = require("./routes/appointmentRoutes");

// require('dotenv').config();

// app.use(cors());
// app.use(express.json());
// app.use(cookieParser());

// connectDB();

// app.get("/",(req,res)=>{
//     res.json({
//         message: "Hospital API is running"
//     });
// });

// app.get("/api/doctors", (req,res) =>{
//     res.json([
//         {
//             name: "Dr.rahul",
//             Specialization: "Cardiology",
//         }
//     ]);
// });

// app.use("/api/appointments", appointmentRoutes);
// app.use("/api/auth", authRoutes);

// app.listen(PORT, ()=>{
//     console.log(`server is running ${PORT}`);
// })

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/bd");
require("dotenv").config();



const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const adminOnly = require("./middleware/adminMiddleware");
const doctorRoutes = require("./routes/doctorRoutes");
const app = express();

const PORT = process.env.PORT || 5000;


// MongoDB
connectDB();


// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


app.use(express.json());
app.use(cookieParser());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/doctors", doctorRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});