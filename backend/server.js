const express = require('express')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errormiddleware')
// const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

// connectDB()
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://abubakar:T2qz6yJYxBDFnBQt@crudcluster.eyywlsk.mongodb.net/mernapp?retryWrites=true&w=majority')

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))