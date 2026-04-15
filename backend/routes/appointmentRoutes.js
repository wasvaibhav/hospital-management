const express = require("express");
const router = express.Router();

const {
    bookAppointment,
    getAppointments,
    getPatientPath
} = require("../controllers/appointmentController");

router.post("/book", bookAppointment); // ✅ function hona chahiye

module.exports = router;