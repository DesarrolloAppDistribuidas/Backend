const Reservation = require("../models/Reservation");

exports.createReservation = async (req, res) => {

    try {
        let reservation;
        // Reservation creation
        reservation = new Reservation(req.body);
        let date1 = reservation.date_in;
        let date2 = reservation.date_out;
        let tiempo = date2.getTime() - date1.getTime();
        let tiempot = tiempo/1000*60*60*24;
        reservation.payment = tiempot*(reservation.number_adults+reservation.number_children*0.6);
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