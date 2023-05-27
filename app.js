const express = require('express')
const logger = require('morgan');
const cors = require('cors')
const healthCheck = require('./routes/healthcheck')
const v1Router = require('./routes/v1')

const app = express()

// Middleware Pipeline
app.use(express.json());
app.use(cors()); // Enable All CORS Requests for easier development; this effects all routers

app.use(logger('dev'));
app.use('/health', healthCheck)
app.use('/v1/api', v1Router)

module.exports = app