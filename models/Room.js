const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    id_room: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Room', RoomSchema);