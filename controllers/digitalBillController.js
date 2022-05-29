const DigitalBill = require("../models/DigitalBill");
const bcrypt = require("bcrypt");


exports.createDigitalBill = async (req, res) => {

    try {
        let digitalBill;
        // DigitalBill creation
        digitalBill = new DigitalBill(req.body);
        await digitalBill.save();
        res.send(digitalBill);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
} 
 
//DigitalBill get con find 
exports.getDigitalBills = async (req, res) => {

    try {

        const digitalBills = await DigitalBill.find();
        res.json(digitalBills)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getDigitalBillByEmail = async (req, res) => {

    try {
        let digitalBill = await DigitalBill.find({email: req.params.email});

        if(!digitalBill) {
            res.status(404).json({ msg: 'DigitalBill does not exist' })
        }
       
        res.json(digitalBill);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getLastDigitalBillByEmail = async (req, res) => {

    try {
        let digitalBill = await DigitalBill.find({email: req.params.email});

        if(!digitalBill) {
            res.status(404).json({ msg: 'DigitalBill does not exist' })
        }
       
        res.json(digitalBill[0]);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}