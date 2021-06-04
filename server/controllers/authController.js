const User = require('../models/User');
const { sign } = require('jsonwebtoken');

const handleErrors = require('../utils/errors');

const secret = process.env.ACCESS_TOKEN_SECRET;



const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
   return sign({ id }, secret, {
      expiresIn: maxAge
   });
};




const sendToken = (user, statusCode, req, res) => {
   const token = createToken(user._id);


   res.cookie('token', token, { httpOnly: true, secure: true, maxAge: maxAge * 1000 });
   //user.password = undefined;
   res.status(statusCode).json({ statusCode: 'success', token, user });
};

//Signup
module.exports.signup_post = async (req, res) => {
   const { name, email, password } = req.body;

   try {
      const user = await User.create({ name, email, password });
      sendToken(user, 201, req, res);

   }
   catch (err) {

      const errors = handleErrors(err);

      res.status(400).json({ errors });
   }

};




//Login
module.exports.login_post = async (req, res) => {
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

module.exports.logout = async (req, res) => {

   const expires = new Date(Date.now() + 10000);
   res.cookie('token', 'expiredtoken', { httpOnly: true, secure: true, maxAge: expires });
   res.status(200).json({ status: 'Success' });
};

// //Middleware

// const decryptJwt = (req, res, next) => {
//    const token = req.cookies.token;
//    console.log(req.cookies, 123);

//    if (token) {

//       verify(token, secret, (error) => {
//          if (error) {

//             res.redirect('./login');
//          } else {

//             next();
//          }
//       });
//    } else {
//       res.redirect('./login');

//       return res.status(401).json({
//          status: 'unauthorized',
//          message: 'You are not authorized to view this content'
//       });
//    }
//    const decoded = verify(token, secret);
//    console.log(decoded);
// };
