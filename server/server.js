const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const app = express();

// Connect Database
connectDB();

app.use(cookieParser());

app.use(function (_, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4000/');
  res.header('withCredentials', 'true');

  next();
});

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Init Middleware
app.use(express.json({ extended: false }));

//Auth
app.use(authRoutes);

//Get Routes
const goalRoutes = require('./routes/goalRoutes');
app.use('/api/goals', goalRoutes);
const PORT = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
