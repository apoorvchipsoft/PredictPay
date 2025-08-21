const Reminder = require("../models/Reminder");

exports.createReminder = async (req, res) => {
  try {
    const reminder = new Reminder(req.body);
    await reminder.save();
    res.status(201).json(reminder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find().populate("invoice");
    res.json(reminders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getReminder = async (req, res) => {
  try {
    const reminder = await Reminder.findById(req.params.id).populate("invoice");
    if (!reminder)
      return res.status(404).json({ message: "Reminder not found" });
    res.json(reminder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateReminder = async (req, res) => {
  try {
    const reminder = await Reminder.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!reminder)
      return res.status(404).json({ message: "Reminder not found" });
    res.json(reminder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteReminder = async (req, res) => {
  try {
    const reminder = await Reminder.findByIdAndDelete(req.params.id);
    if (!reminder)
      return res.status(404).json({ message: "Reminder not found" });
    res.json({ message: "Reminder deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
