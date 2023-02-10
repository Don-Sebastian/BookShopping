const userModel = require("../Models/userModel");
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

const createToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: maxAge
    });
}

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message === "Incorrect Email")
    errors.email = "This email is not registered";

  if (err.message === "Incorrect Password")
    errors.password = "Password is incorrect";

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};


module.exports.register = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.create({ email, password });
      const token = createToken(user._id);

      res.cookie("jwt", token, {
        withCredintials: true,
        httpOnly: false,
        maxAge: maxAge * 1000,
      });

      res.status(200).json({ user: user._id, created: true });
    } catch (error) {
      console.log(error);
        const errors = handleErrors(error);
        res.json({ errors, created: false });
    }
};

module.exports.login = async (req, res, next) => { 
    try {
      const { email, password } = req.body;
      const user = await userModel.login(email, password);
      const token = createToken(user._id);

      res.cookie("jwt", token, {
        withCredintials: true,
        httpOnly: false,
        maxAge: maxAge * 1000,
      });

      res.status(201).json({ user: user._id, created: true });
    } catch (error) {
      console.log(error);
      const errors = handleErrors(error);
      res.json({ errors, created: false });
    }
};