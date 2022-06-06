const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bcrypt = require('bcrypt')
const NodeRSA = require('node-rsa')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000
app.set('json spaces', 2)
//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(process.env.MONGODB).then(() => {
    console.log('Conected to mongoDB')
}).catch((error) => {
    console.error(error)
})

//routes
app.use('/api/users', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/digitalBills', require('./routes/digitalBill'));
app.use('/api/rooms', require('./routes/room'));

app.listen(port, () => {
    console.log('listening on port: ', port)
})