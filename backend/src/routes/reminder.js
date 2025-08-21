const express = require("express");
const router = express.Router();
const reminderController = require("../controllers/reminderController");
const auth = require("../middleware/auth");

router.post("/", auth, reminderController.createReminder);
router.get("/", auth, reminderController.getReminders);
router.get("/:id", auth, reminderController.getReminder);
router.put("/:id", auth, reminderController.updateReminder);
router.delete("/:id", auth, reminderController.deleteReminder);

module.exports = router;
