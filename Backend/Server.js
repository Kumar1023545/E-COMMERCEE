// const express = require('express')
// const mongoose = require('mongoose')
// const ProductRoutes = require('./Routes/Product.route')
// const UserRoutes = require('./Routes/User.route')
// const cors = require('cors')
// require('dotenv').config();

// const app=express();
// const PORT=3001;

// mongoose.connect(process.env.MONGODB_URI)
// .then(()=>{
//     console.log("✅ Connected to MongoDB");
// })
// .catch((error)=>{
//     console.error("Error Connecting to Database",error);
// })


// app.use(cors());
// app.use(express.json());
// app.use('/api/products',ProductRoutes)
// app.use('/api/auth',UserRoutes)


// app.listen(PORT,()=>{
//     console.log(`✅ Server Running on PORT ${PORT}`)
// })


const express = require('express');
const mongoose = require('mongoose');
const ProductRoutes = require('./Routes/Product.route');
const UserRoutes = require('./Routes/User.route');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS setup for Vercel frontend
app.use(cors({
  origin: ['https://client-xi-beryl.vercel.app', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((error) => {
    console.error(" Error Connecting to Database", error);
  });

app.use('/api/products', ProductRoutes);
app.use('/api/auth', UserRoutes);

app.get('/', (req, res) => {
    res.send('✅ Backend API is running!');
  });

module.exports = app;


