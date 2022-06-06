// Reservation routes
const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
 
// api/reservations
router.post('/', reservationController.createReservation);
router.get('/', reservationController.getReservation);
router.get('/email/:email', reservationController.getReservationByEmail);
router.get('/email/last/:email', reservationController.getLastReservationByEmail);
router.delete('/email/:email', reservationController.deleteReservation);
module.exports = router;