// backend/server.js
const express = require("express");
const cors = require("cors");
const path = require("path");

// Route modules
const affiliationRoutes = require("./routes/affiliationRoutes");
const submissionRoutes = require("./routes/submissionRoutes");

const app = express();

// Use 8084 because that is what you opened in the browser
const PORT = process.env.PORT || 8084;

// Middlewares
app.use(
  cors({
    origin: "http://192.168.0.8:8082", // FRONTEND URL/PORT (change if needed)
  })
);
app.use(express.json());

// API routes
app.use("/api/affiliations", affiliationRoutes);
app.use("/api/submissions", submissionRoutes);

// Health-check (for testing in the browser)
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend API is running" });
});

// Optional: static assets (not required for you)
app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(PORT, () => {
  console.log(`✅ Backend API running on http://localhost:${PORT}`);
});
