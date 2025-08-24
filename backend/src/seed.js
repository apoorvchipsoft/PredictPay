// Script to seed MongoDB with dummy data for all models
require("dotenv").config();
const mongoose = require("mongoose");
const Customer = require("./models/Customer");
const Invoice = require("./models/Invoice");
const Payment = require("./models/Payment");
const Prediction = require("./models/Prediction");
const Reminder = require("./models/Reminder");
const User = require("./models/User");

const MONGO_URI = process.env.MONGO_URI;

async function seed() {
  // Clear existing data

  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Dummy Customers
  const customers = await Customer.insertMany([
    {
      name: "Acme Corp",
      email: "acme@example.com",
      phone: "1234567890",
      address: "123 Main St",
    },
    {
      name: "Tech Solutions",
      email: "tech@example.com",
      phone: "9876543210",
      address: "456 Tech Ave",
    },
  ]);

  // Dummy Users
  const users = await User.insertMany([
    {
      name: "Admin User",
      email: "admin@example.com",
      password: "hashedpassword",
      role: "admin",
    },
    {
      name: "Finance User",
      email: "finance@example.com",
      password: "hashedpassword",
      role: "finance",
    },
    {
      name: "Customer User",
      email: "customer@example.com",
      password: "hashedpassword",
      role: "customer",
    },
  ]);

  // Dummy Invoices
  const invoices = await Invoice.insertMany([
    {
      customer: customers[0]._id,
      amount: 12500,
      date: new Date("2025-08-15"),
      dueDate: new Date("2025-08-30"),
      status: "paid",
    },
    {
      customer: customers[1]._id,
      amount: 24500,
      date: new Date("2025-07-20"),
      dueDate: new Date("2025-08-20"),
      status: "overdue",
    },
  ]);

  // Dummy Payments
  await Payment.insertMany([
    {
      invoice: invoices[0]._id,
      amount: 12500,
      date: new Date("2025-08-16"),
      method: "bank transfer",
    },
    {
      invoice: invoices[1]._id,
      amount: 24500,
      date: new Date("2025-08-21"),
      method: "credit card",
    },
  ]);

  // Dummy Predictions
  await Prediction.insertMany([
    {
      customer: customers[0]._id,
      invoice: invoices[0]._id,
      riskScore: 0.1,
      predictedLate: false,
      forecastDaysLate: 0,
    },
    {
      customer: customers[1]._id,
      invoice: invoices[1]._id,
      riskScore: 0.7,
      predictedLate: true,
      forecastDaysLate: 5,
    },
  ]);

  // Dummy Reminders
  await Reminder.insertMany([
    {
      invoice: invoices[0]._id,
      message: "Payment due soon",
      sent: false,
      date: new Date("2025-08-28"),
    },
    {
      invoice: invoices[1]._id,
      message: "Invoice overdue",
      sent: true,
      date: new Date("2025-08-22"),
    },
  ]);

  console.log("Database seeded successfully!");
  mongoose.disconnect();
}

seed().catch((err) => {
  console.error("Seeding error:", err);
  mongoose.disconnect();
});
