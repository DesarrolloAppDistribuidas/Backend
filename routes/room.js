// Room routes
const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
 
// api/rooms
router.post('/', roomController.createRoom);
router.get('/', roomController.getRooms);
router.get('/:id', roomController.getRoom);
router.get('/idroom/:id_room', roomController.getRoomByIdRoom);
module.exports = router;    