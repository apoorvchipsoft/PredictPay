const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    invoice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
      required: true,
    },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    method: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
