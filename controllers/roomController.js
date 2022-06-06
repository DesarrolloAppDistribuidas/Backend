const Room = require("../models/Room");

exports.createRoom = async (req, res) => {

    try {
        let room;
        // Room creation
        room = new Room(req.body);
        await room.save();
            res.send(room);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
} 
 
//room get con find 
exports.getRooms = async (req, res) => {

    try {

        const rooms = await Room.find();
        res.json(rooms)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getRoom = async (req, res) => {

    try {
        let room = await Room.findById(req.params.id);

        if(!room) {
            res.status(404).json({ msg: 'Room does not exist' })
        }
       
        res.json(room);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getRoomByIdRoom = async (req, res) => {

    try {
        let room = await Room.findOne({id_room: req.params.id_room});

        if(!room) {
            res.status(404).json({ msg: 'Room does not exist' })
        }
       
        res.json(room);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}