const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes import
const appointmentRoutes = require("./routes/appointmentRoutes");

app.use("/api", appointmentRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});