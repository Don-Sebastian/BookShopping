const UserModel = require("../Models/userModel");
const jwt = require("jsonwebtoken");

module.exports.checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    await jwt.verify(
      token,
      `${process.env.JWT_SECRET_KEY}`,
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          req.userId = decodedToken.userId;
          const user = await UserModel.findById(decodedToken.userId);
          if (user) res.json({ status: true, user: user });
          else res.json({ status: false });
          next();
        }
      }
    );
  } else {
    res.json({ status: false });
    next();
  }
};
