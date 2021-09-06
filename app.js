const express = require('express')
const logger = require('morgan');
const privateRouter = require('./routes/private')
const publicRouter = require('./routes/public')
const healthCheck = require('./routes/healthcheck')

const app = express()

app.use(logger('dev'));
app.use('/private', privateRouter) 
app.use('/public', publicRouter)
app.use('/service/health', healthCheck)

module.exports = app