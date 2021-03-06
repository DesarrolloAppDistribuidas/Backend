const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const NodeRSA = require('node-rsa');

const UserSchema = mongoose.Schema({
    dni: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname_p: {
        type: String,
        required: true
    },
    lastname_m: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: [Number],
        required: true
    },
    card_number: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
    updated_date: {
        type: Date,
        default: Date.now()
    }
});


UserSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
  };

UserSchema.statics.encryptCardNumber = async (card_number) => {
    const key = new NodeRSA({b: 1024});
    return await key.encrypt(card_number, 'base64');
  };

module.exports = mongoose.model('User', UserSchema);