// GET /api/dashboard/upcoming-payments
exports.getUpcomingPayments = async (req, res) => {
  try {
    const now = new Date();
    const payments = await Invoice.find({
      status: "pending",
      dueDate: { $gte: now },
    })
      .sort({ dueDate: 1 })
      .limit(5)
      .populate("customer", "name");
    const result = payments.map((pay) => ({
      id: pay._id,
      customer: pay.customer?.name || "Unknown",
      amount: pay.amount,
      dueDate: pay.dueDate,
      status: pay.status,
    }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch upcoming payments" });
  }
};
const Invoice = require("../models/Invoice");

// GET /api/dashboard/figures
exports.getDashboardFigures = async (req, res) => {
  try {
    const totalInvoices = await Invoice.countDocuments();
    const paidInvoices = await Invoice.countDocuments({ status: "paid" });
    const overdueInvoices = await Invoice.countDocuments({ status: "overdue" });
    const draftInvoices = await Invoice.countDocuments({ status: "draft" });
    const totalAmountAgg = await Invoice.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);
    const totalAmount = totalAmountAgg[0]?.total || 0;

    res.json({
      totalInvoices,
      paidInvoices,
      overdueInvoices,
      draftInvoices,
      totalAmount,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch dashboard figures" });
  }
};

// GET /api/dashboard/recent-invoices
exports.getRecentInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({})
      .sort({ dueDate: -1 })
      .limit(5)
      .populate("customer", "name");
    const result = invoices.map((inv) => ({
      id: inv._id,
      customer: inv.customer?.name || "Unknown",
      amount: inv.amount,
      dueDate: inv.dueDate,
      status: inv.status,
    }));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recent invoices" });
  }
};
