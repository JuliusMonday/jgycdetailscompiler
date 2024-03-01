const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./config/database');
require("dotenv").config();
const router = require('./routes/index');
const adminRouter = require('./routes/admin');
const app = express();

// Database configuration
dbConnection()
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
// to view my static files
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');

// Routes

app.use('/', router);
app.use("/submit", router)
app.use("/", router)
app.use('/', adminRouter);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1"
app.listen(PORT, HOST, () => console.log(`Server started on http://${HOST}:${PORT}`));
