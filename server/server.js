const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const viewRouter = require('./routes/viewRouter');


const app = express();

// Connect Database
connectDB();

app.use(cookieParser());

app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', 'http://localhost:4000/');
   res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
   res.header('withCredentials', 'true');

   next();
});

app.use(cors({
   origin: true,
   credentials: true
}));

// Init Middleware
app.use(express.json({ extended: false }));


//Get Routes
app.use(authRoutes);
//app.use(viewRouter);




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
