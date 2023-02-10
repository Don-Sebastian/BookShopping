const books = require('../Models/books');

const getAllBooks = async (req, res) => {
    try {
        const booksList = await books.find({});
        
        res.json(booksList);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'})
    }
}

const getBookById = async (req, res) => {
  try {
    const bookDetails = await books.findById(req.params.id);

    res.json(bookDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
    getAllBooks,
    getBookById,
}