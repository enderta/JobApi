const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const userRoutes = require('../src/modules/users/users.route');
const jobRoutes = require('../src/modules/jobs/jobs.route');

dotenv.config();

const app = express();

app.use(cors(
    {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
    }
));

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);

module.exports = app;