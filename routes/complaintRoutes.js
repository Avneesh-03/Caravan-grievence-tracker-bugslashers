const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

router.post("/", async (req, res) => {
  const complaint = new Complaint(req.body);
  await complaint.save();
  res.json(complaint);
});

router.get("/", async (req, res) => {
  const complaints = await Complaint.find();
  res.json(complaints);
});

module.exports = router;
