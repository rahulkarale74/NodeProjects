const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyparser.json());

// define a root/default route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// load routers
const prodroutes = require('./server/routes/router');
// using as middleware
app.use('/api', prodroutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
