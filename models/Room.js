const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    id_room: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    charge: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Room', RoomSchema);