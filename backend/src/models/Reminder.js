const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema(
  {
    invoice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
      required: true,
    },
    sentAt: { type: Date, default: Date.now },
    method: { type: String, enum: ["email", "whatsapp"], required: true },
    status: { type: String, enum: ["sent", "failed"], default: "sent" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reminder", ReminderSchema);
