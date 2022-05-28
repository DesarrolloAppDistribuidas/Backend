const User = require("../models/User");
const bcrypt = require("bcrypt");


exports.createUser = async (req, res) => {

    try {
        let user;
        // User creation
        user = new User(req.body);
        user.password = await User.encryptPassword(user.password);
        await user.save();
        res.send(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
} 
 
//user get con find 
exports.getUsers = async (req, res) => {

    try {

        const users = await User.find();
        res.json(users)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.updateUser = async (req, res) => {

    try {
        const { dni, name, lastname_p, lastname_m, email, password, phone, status, created_date, updated_date } = req.body;
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }

        user.dni = dni;
        user.name = name;
        user.lastname_p = lastname_p;
        user.lastname_m = lastname_m;
        user.email = email;
        user.password = await User.encryptPassword(password);
        user.phone = phone;
        user.status = status;
        user.created_date = created_date;
        user.updated_date = updated_date;

        user = await User.findOneAndUpdate({ _id: req.params.id },user, { new: true} )
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.updateUserByDni = async (req, res) => {

    try {
        const { dni, name, lastname_p, lastname_m, email, password, phone, status, created_date, updated_date } = req.body;
        let user = await User.findOne({dni: req.params.dni});

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }

        user.dni = dni;
        user.name = name;
        user.lastname_p = lastname_p;
        user.lastname_m = lastname_m;
        user.email = email;
        user.password = await User.encryptPassword(password);
        user.phone = phone;
        user.status = status;
        user.created_date = created_date;
        user.updated_date = updated_date;

        user = await User.findOneAndUpdate({ dni: req.params.dni },user, { new: true} )
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.updateUserByEmail = async (req, res) => {

    try {
        const { dni, name, lastname_p, lastname_m, email, password, phone, status, created_date, updated_date } = req.body;
        let user = await User.findOne({dni: req.params.email});

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }

        user.dni = dni;
        user.name = name;
        user.lastname_p = lastname_p;
        user.lastname_m = lastname_m;
        user.email = email;
        user.password = await User.encryptPassword(password);
        user.phone = phone;
        user.status = status;
        user.created_date = created_date;
        user.updated_date = updated_date;

        user = await User.findOneAndUpdate({ email: req.params.email },user, { new: true} )
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getUser = async (req, res) => {

    try {
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }
       
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getUserByDni = async (req, res) => {

    try {
        let user = await User.findOne({dni: req.params.dni});

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }
       
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getUserByEmail = async (req, res) => {

    try {
        let user = await User.findOne({email: req.params.email});

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }
       
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.deleteUser = async (req, res) => {

    try {
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }
       
        await User.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'User successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.deleteUserByDni = async (req, res) => {

    try {
        let user = await User.findOne({dni: req.params.dni});

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }
       
        await User.findOneAndRemove({ dni: req.params.dni })
        res.json({ msg: 'User successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.deleteUserByEmail = async (req, res) => {

    try {
        let user = await User.findOne({email: req.params.email});

        if(!user) {
            res.status(404).json({ msg: 'User does not exist' })
        }
       
        await User.findOneAndRemove({ email: req.params.email })
        res.json({ msg: 'User successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}