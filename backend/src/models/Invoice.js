const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    amount: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    status: {
      type: String,
      enum: ["pending", "paid", "overdue"],
      default: "pending",
    },
    fileUrl: { type: String }, // For OCR invoice upload
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", InvoiceSchema);
