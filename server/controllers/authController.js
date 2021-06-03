const User = require('../models/User');
const { sign } = require('jsonwebtoken');

const secret = process.env.ACCESS_TOKEN_SECRET;



const handleErrors = (err) => {

   let errors = { name: '', email: '', password: '', noUser: '' };
   //Check if email is unique
   if (err.code === 11000) {
      errors.email = 'User alredy exist';
      return errors;
   }

   //LOGIN Incorect email or password
   if (err.message === 'The user does not exist') {
      errors.noUser = 'The user does not exist';
   }

   if (err.message.includes('user validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
         errors[properties.path] = properties.message;
      });
   }
   return errors;
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
   return sign({ id }, secret, {
      expiresIn: maxAge
   });
};
// controller actions
module.exports.signup_get = (req, res) => {
   res.send('signup');
};

module.exports.login_get = (req, res) => {
   res.send('login');
};

const sendToken = (user, statusCode, req, res) => {
   const token = createToken(user._id);
   res.cookie('token', token, { httpOnly: true, secure: true, maxAge: maxAge * 1000 });
   user.password = undefined;
   res.status(statusCode).json({ statusCode: 'success', token, user });
};

//Signup
module.exports.signup_post = async (req, res) => {
   const { name, email, password } = req.body;

   try {
      const user = await User.create({ name, email, password });
      sendToken(user, 201, req, res);
      // const token = createToken(_id);
      // res.cookie('token', token, { httpOnly: true, secure: true, maxAge: maxAge * 1000 });
      // res.status(201).json({ token, user });
   }
   catch (err) {

      const errors = handleErrors(err);
      // res.status(400).send(errors);
      res.status(400).json({ errors });
   }

};


//Login
module.exports.login_post = async (req, res) => {
   const { email, password } = req.body;

   try {
      const user = await User.login(email, password);
      // const token = createToken(_id);

      // res.cookie('token', token, { httpOnly: true, maxAge: maxAge * 1000 });
      // res.status(200).json(user);

      sendToken(user, 201, req, res);

   } catch (err) {

      const errors = handleErrors(err);
      res.status(400).json({ errors });

   }
};