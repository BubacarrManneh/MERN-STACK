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

// Serve frontend
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
//     )
//   )
// } else {
//   app.get('/', (req, res) => res.send('Please set to production'))
// }

// app.use(errorHandler)

// app.listen(port, () => console.log(`Server started on port ${port}`))

const cors=require("cors");
const corsOptions ={
   origin:'http://localhost:3000',
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration