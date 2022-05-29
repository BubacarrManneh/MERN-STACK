const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const { errorHandler } = require('./Middlewares/errorMiddleware')
const dbConnect = require('./Config/database')
const port = process.env.PORT || 5000;

dbConnect()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/user', require('./Routers/userRouter'))
app.use('/api/blog', require('./Routers/blogRouter'))
app.use(errorHandler)

app.listen( port , () => console.log(`Server is running on ${port}`))