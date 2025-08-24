require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes);
const invoiceRoutes = require("./routes/invoice");
app.use("/api/invoices", invoiceRoutes);
const customerRoutes = require("./routes/customer");
app.use("/api/customers", customerRoutes);
const paymentRoutes = require("./routes/payment");
app.use("/api/payments", paymentRoutes);
const reminderRoutes = require("./routes/reminder");
app.use("/api/reminders", reminderRoutes);

const dashboardRoutes = require("./routes/dashboard");
app.use("/api/dashboard", dashboardRoutes);

// Health check endpoint for MongoDB connection
app.get("/api/db-status", (req, res) => {
  const state = mongoose.connection.readyState;
  // 1 = connected, 2 = connecting, 0 = disconnected, 3 = disconnecting
  res.json({ state });
});

app.get("/", (req, res) => {
  res.send("PredictPay API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
