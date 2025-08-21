const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");
const auth = require("../middleware/auth");

router.post("/", auth, invoiceController.createInvoice);
router.get("/", auth, invoiceController.getInvoices);
router.get("/:id", auth, invoiceController.getInvoice);
router.put("/:id", auth, invoiceController.updateInvoice);
router.delete("/:id", auth, invoiceController.deleteInvoice);

module.exports = router;
