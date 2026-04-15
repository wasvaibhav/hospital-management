console.log("Appointments:", appointments);

const { appointments } = require("../data/store");
const { addEdge } = require("../models/graphModel");

exports.bookAppointment = (req, res) => {
    const { name, subject, number, department, date, time } = req.body;

    if (!name || !number || !department || !date || !time) {
        return res.json({ error: "All fields required" });
    }

    const appointment = {
        id: Date.now(),
        name,
        subject,
        number,
        department,
        date,
        time
    };

    appointments.push(appointment);

    // GRAPH LOGIC
    addEdge(name, appointment.id);
    addEdge(appointment.id, department);

    res.json({
        message: "Appointment Booked Successfully",
        appointment
    });
};