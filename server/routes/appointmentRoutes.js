const express = require("express");

const Appointment = require("../models/Appointment");
const protect = require("../middleware/authMiddleware");

const router = express.Router();



router.post("/", protect, async (req, res) => {
  try {
    const {
      patientName,
      email,
      phone,
      specialty,
      date,
      reason,
    } = req.body;

    if (
      !patientName ||
      !email ||
      !phone ||
      !specialty ||
      !date
    ) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    const appointment = await Appointment.create({
      patient: req.user.id,
      patientName,
      email,
      phone,
      specialty,
      date,
      reason,
    });

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to book appointment",
    });
  }
});



router.get("/my", protect, async (req, res) => {
  try {
    const appointments = await Appointment.find({
      patient: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(appointments);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch appointments",
    });
  }
});


router.get("/doctor", protect, async (req, res) => {
  try {

    const appointments = await Appointment.find({
      status: {
        $in: ["pending", "confirmed"],
      },
    })
      .populate("patient", "name email")
      .sort({
        date: 1,
      });

    res.status(200).json(appointments);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Failed to fetch doctor appointments",
    });

  }
});


router.patch("/:id/status", protect, async (req,res) => {
  try {
    const {status} = req.body;

    const allowedStatus = [
      "pending",
      "confirmed",
      "completed",
      "cancelled",
    ];

    if(!allowedStatus.includes(status)){
      return res.status(400).json({
        message: "Invalid Status",
      });
    }

    const appointment = 
       await Appointment.findByIdAndUpdate(
        req.params.id,
        {
          status,
        },
        {
          new: true,
        }
       );

       if (!appointment) {
        return res.status(404).json({
          message: "Appointment not found",
        });
       }

       res.status(200).json({
        message: "Appointment status updated",
        appointment,
       });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update appointment",
    });
  }
});

module.exports = router;