const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

router.get("/figures", dashboardController.getDashboardFigures);
router.get("/recent-invoices", dashboardController.getRecentInvoices);
router.get("/upcoming-payments", dashboardController.getUpcomingPayments);

module.exports = router;
