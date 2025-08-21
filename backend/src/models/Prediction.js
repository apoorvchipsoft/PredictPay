const mongoose = require("mongoose");

const PredictionSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    invoice: { type: mongoose.Schema.Types.ObjectId, ref: "Invoice" },
    riskScore: { type: Number },
    predictedLate: { type: Boolean },
    forecastDaysLate: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prediction", PredictionSchema);
