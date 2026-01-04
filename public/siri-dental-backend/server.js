const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
//require("./utils/reminderJob");


const appointmentRoutes = require("./routes/appointments");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/appointments", appointmentRoutes);

const adminRoutes = require("./routes/admin");

app.use("/api/admin", adminRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("SIRI Dental Backend is running");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB connected");
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
    });
    
const availabilityRoutes = require("./routes/availability");
app.use("/api/availability", availabilityRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);


const cors = require("cors");

app.use(cors({
  origin: [
    "https://siri-dental-clinic-frontend.vercel.app"
  ],
  methods: ["GET", "POST", "DELETE"],
  credentials: true
}));

});

