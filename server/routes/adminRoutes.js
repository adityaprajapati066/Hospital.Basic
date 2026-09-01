const express = require("express");

const User = require("../models/user");
const Appointment = require("../models/Appointment");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/stats", protect, async (req, res) => {

  try {

    const patients = await User.countDocuments({
      role: "patient",
    });

    const doctors = await User.countDocuments({
      role: "doctor",
    });

    const appointments =
      await Appointment.countDocuments();

    const pending =
      await Appointment.countDocuments({
        status: "pending",
      });

    res.status(200).json({
      patients,
      doctors,
      appointments,
      pending,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to load admin statistics",
    });

  }

});


module.exports = router;