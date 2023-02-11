const books = require('../Models/books');

const getHomePage = async (req, res) => {
    if (res.locals.status) {
      let status = res.locals.status;
      let user = res.locals.user;
      try {
        res.json({ status, user });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      }
    } else {
      res.json({ status: false });
    }
}

const getAllBooks = async (req, res) => {
    if (res.locals.status) {
        let status = res.locals.status;
        let user = res.locals.user;
        try {
            const booksList = await books.find({});
          
          res.json({ booksList, status, user });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Server Error" });
        }
    } else {
        res.json({ status: false });
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
    getHomePage,
    getAllBooks,
    getBookById,
}