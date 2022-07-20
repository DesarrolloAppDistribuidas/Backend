const Reservation = require("../models/Reservation");
const Room = require("../models/Room");
/*
exports.createReservation = async (req, res) => {

    try {
        let reservation;
        
        // Reservation creation
        reservation = new Reservation(req.body);
        let room = await Room.findOne({id_room: reservation.id_room});
        let tiempo = Date.parse(reservation.date_out) - Date.parse(reservation.date_in);
        let tiempot = tiempo/(1000*60*60*24);
        reservation.payment = tiempot*(reservation.number_adults+reservation.number_children*0.6)*room.charge;
        await reservation.save();
        res.send(reservation);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
} 
*/
async function verifyRoom(id_room) {

    try {
        let room = await Room.findOne({id_room});

        if(!room) {
            res.status(404).json({ msg: 'Room does not exist' })
        }
        let charge = room.charge;
        return(charge);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

async function calculatePayment(date_in, date_out, number_adults, number_children, roomcharge) {

    try {

        let tiempo = Date.parse(date_out) - Date.parse(date_in);
        let tiempot = tiempo/(1000*60*60*24);
        let payment = tiempot*(number_adults+number_children*0.6)*roomcharge;
        return(payment);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.createReservation = async (req, res) => {

    try {
        let reservation;
        
        // Reservation creation
        reservation = new Reservation(req.body);
        chargeroom = await verifyRoom(reservation.id_room);
        payment = await calculatePayment(reservation.date_in, reservation.date_out, reservation.number_adults, reservation.number_children, chargeroom);
        reservation.payment = Number(payment);
        await reservation.save();
        res.send(reservation);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
} 

//reservations get con find 
exports.getReservation = async (req, res) => {

    try {

        const reservations = await Reservation.find();
        res.json(reservations)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getReservationByEmail = async (req, res) => {

    try {
        let reservation = await Reservation.find({email: req.params.email}).sort({date_in: -1 });

        if(!reservation) {
            res.status(404).json({ msg: 'Reservation does not exist' })
        }
       
        res.json(reservation);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getLastReservationByEmail = async (req, res) => {

    try {
        let reservation = await Reservation.find({email: req.params.email}).sort({date_in: -1 });

        if(!reservation) {
            res.status(404).json({ msg: 'Reservation does not exist' })
        }
       
        res.json(reservation[0]);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.deleteReservation = async (req, res) => {

    try {
        let reservation = await Reservation.find({email: req.params.email}).sort({date_in: -1 });

        if(!reservation) {
            res.status(404).json({ msg: 'Reservation does not exist' })
        }
       
        await Reservation.findOneAndRemove(reservation[0])
        res.json({ msg: 'Reservation successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}