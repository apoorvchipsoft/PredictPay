const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    riskScore: { type: Number, default: 0 }, // For analytics
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", CustomerSchema);
