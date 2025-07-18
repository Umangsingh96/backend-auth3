const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

dotenv.config();
connectDB(); // 🔌 MongoDB se connect

app.use(express.json()); // 📦 Body parser
app.use("/api", authRoutes); // 🔗 /api/register, /api/login

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
