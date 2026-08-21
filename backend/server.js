const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Routes
const postRoutes = require("./routes/postRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({
      status: "ok",
     message: "CommunityHub API running",
            });
            });

            // Post routes
            app.use("/api/posts", postRoutes);

            // Server port
            const PORT = process.env.PORT || 3000;

            // Start server
            app.listen(PORT, "0.0.0.0", () => {
              console.log(`Server running on port ${PORT}`);
              });