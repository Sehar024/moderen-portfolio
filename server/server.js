const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running!",
  });
});

const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contact", contactRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected successfully");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

startServer();