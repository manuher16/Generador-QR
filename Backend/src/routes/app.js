const express = require('express');
const morgan = require('morgan');
const { notFound, errorHandler } = require('../errors/error');
const public = require('./public.routes');
const user = require('./user.routes');
const cors = require('cors')
const app = express();

app.use(cors(
    {
        origin: '*',
        credentials: true
    }

))
app.use(express.json());
app.use(morgan('dev'));

app.use('/', public);
app.use('/user', user);

app.use(notFound);
app.use(errorHandler);

module.exports = app;