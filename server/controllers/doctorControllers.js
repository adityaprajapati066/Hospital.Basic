const Doctor = require("../models/Doctor");

const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching doctors",
    });
  }
};

const createDoctor = async (req, res) => {
  try {
    const {
      user,
      name,
      email,
      specialty,
      number,
      experience,
      available,
    } = req.body;

    if (!user || !name || !email || !specialty) {
      return res.status(400).json({
        message: "User, name, email and specialty are required",
      });
    }

    const doctor = await Doctor.create({
      user,
      name,
      email,
      specialty,
      number,
      experience,
      available,
    });

    res.status(201).json({
      message: "Doctor created successfully",
      doctor,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error creating doctor",
    });
  }
};

module.exports = {
  getDoctors,
  createDoctor,
};