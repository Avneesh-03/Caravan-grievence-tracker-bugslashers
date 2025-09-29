const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: "OPEN" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Complaint", ComplaintSchema);
