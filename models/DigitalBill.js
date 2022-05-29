const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DigitalBillSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    reservation: {
        type: Number,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
    updated_date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('DigitalBill', DigitalBillSchema);