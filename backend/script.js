require('dotenv').config();

const booksData = require('./data/books');
const connectDB = require('./config/db');
const books = require('./Models/books');

connectDB();

const importData = async () => {
    try {
        await books.deleteMany({});

        await books.insertMany(booksData);

        console.log('Data import success');
        process.exit();
    } catch (error) {
        console.error('Error with data import');
        process.exit(1);
    }
}

importData();