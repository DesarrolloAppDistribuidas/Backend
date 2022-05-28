const User = require("../models/User");
const bcrypt = require("bcrypt");

//user get con find 
exports.login = async (req, res) => {

    try {
        let user = await User.findOne({ email: req.body.email });
        
        if(!user) {
            res.status(404).json({ msg: 'User does not exist papu' })
        }

        const papu = await User.comparePassword(
            req.body.password,
            user.password
        );
        
        if(!papu) {
            res.status(401).json({ msg: 'User does not match the password papu' })
        }
        
        res.json({ msg: 'Welcome papu' })

    } catch (error) {
        console.log(error);
    }
}