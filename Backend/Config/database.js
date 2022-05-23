const mongoose = require('mongoose')

const dbConnet = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connection successful: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = dbConnet