// DigitalBill routes
const express = require('express');
const router = express.Router();
const digitalBillController = require('../controllers/digitalBillController');
 
// api/digitalBills
router.post('/', digitalBillController.createDigitalBill);
router.get('/', digitalBillController.getDigitalBills);
router.get('/email/:email', digitalBillController.getDigitalBillByEmail);
router.get('/email/last/:email', digitalBillController.getLastDigitalBillByEmail);
module.exports = router;