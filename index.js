const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 5369;
const app = express();
const dbURL = 'PLACE-DB-URL-HERE';

mongoose.connect(dbURL);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


const user = require('./routes/user.route');
app.use('/users', user);

app.listen(PORT, () => console.log(`Server is running At: ${PORT}`));
