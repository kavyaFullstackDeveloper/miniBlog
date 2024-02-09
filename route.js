
const authorcontroller = require('./src/models/controllers/authorcontrollers');

const express = require('express');

const router = express.Router();

router.post('/create-author', authorcontroller.createauthor)

router.get('/get-author', authorcontroller.getauthordata)

module.exports = router 