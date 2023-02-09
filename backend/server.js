require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const connectDB = require('./config/db');

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

app.use(express.json());