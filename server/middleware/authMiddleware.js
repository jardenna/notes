const { verify } = require('jsonwebtoken');

const secret = process.env.ACCESS_TOKEN_SECRET;

function authMiddleware(req, res, next) {
   //Get token from header
   const token = req.cookies.token;
   // Check if not token
   if (!token) {
      return res.status(401).json({ status: 'No token, authorization denied' });
   }

   try {
      const decoded = verify(token, secret);

      req.user = decoded;
      next();
   } catch (err) {
      res.status(401).json({ status: 'Token is not valid' });
   }
}


module.exports = authMiddleware;