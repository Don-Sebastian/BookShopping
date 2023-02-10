const { register, login } = require('../Controllers/AuthControllers');
const { checkUser } = require('../Middlewares/AuthMiddlewares');

const { getAllBooks, getBookById } = require('../Controllers/bookControllers')

const router = require('express').Router();

router.post("/register", register);
router.post("/login", login);

//@desc GET all products form db
//@route GET /api/products
router.post('/api/books', checkUser, getAllBooks);

//@desc GET a product form db
//@route GET /api/product/:id
router.post("/api/books/:id", checkUser, getBookById);


module.exports = router;