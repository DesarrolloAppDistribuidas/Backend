const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    id_room: {
        type: String,
        required: true
    },
    number_adults: {
        type: Number,
        required: true
    },
    number_children: {
        type: Number,
        required: true
    },
    date_in: {
        type: Date,
        required: true
    },
    date_out: {
        type: Date,
        required: true
    },
    payment: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Reservation', ReservationSchema);