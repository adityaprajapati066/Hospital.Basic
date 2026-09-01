const express = require("express");

const router = express.Router();

const {
  getDoctors,
  createDoctor,
} = require("../controllers/doctorControllers");

router.get("/", getDoctors);

router.post("/", createDoctor);

module.exports = router;