require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const connectDB = require('./config/db');
const authRoutes = require('./Routes/AuthRouters');
const cookieParser = require('cookie-parser');

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use('/', authRoutes);