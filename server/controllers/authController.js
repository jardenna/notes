const User = require('../models/UserModel');
const { sign } = require('jsonwebtoken');

const handleErrors = require('../utils/errors');

const secret = process.env.ACCESS_TOKEN_SECRET;

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return sign({ id }, secret, {
    expiresIn: maxAge,
  });
};

const sendToken = (user, statusCode, req, res) => {
  const token = createToken(user._id);
  res.cookie('token', token, {
    httpOnly: true,
    secure: true,
    maxAge: maxAge * 1000,
  });
  res.status(statusCode).json({ statusCode: 'success', user });
};

//Signup
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    sendToken(user, 201, req, res);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

//Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    sendToken(user, 201, req, res);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

//Logout
exports.logout = async (req, res) => {
  const expires = new Date(Date.now() + 1000);
  res.cookie('token', 'expiredtoken', {
    httpOnly: true,
    secure: true,
    expires,
  });
  res.status(200).json({ status: 'User is logged out' });
};

//check if user is logged in
exports.checkUser = async (req, res) => {
  try {
    //Get the currentUser object without the password
    const currentuser = await User.findById(req.user.id).select('-password');
    res.json(currentuser);
  } catch (err) {
    res.status(500).send('Server Error', err);
  }
};
