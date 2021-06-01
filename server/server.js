
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');


const app = express();

// Connect Database
connectDB();
app.use(cors());
// Init Middleware
app.use(express.json({ extended: false }));


//Get Routes
app.use(authRoutes);

// cookies

app.use(cookieParser());

app.get('/set-cookies', (req, res) => {

   // res.setHeader('Set-Cookie', 'newUser=true');

   res.cookie('newUser', false);
   res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });

   res.send('you got the cookies!');

});

app.get('/read-cookies', (req, res) => {

   const cookies = req.cookies;
   console.log(cookies.newUser);

   res.json(cookies);

});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
