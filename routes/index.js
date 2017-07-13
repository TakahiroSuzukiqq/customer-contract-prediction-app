require('dotenv').config()

var express = require('express');
var AWS = require('aws-sdk');

var router = express.Router();
var indexController = require('../controllers/indexController')


router.get('/', indexController.getAmlPrediction);
//router.post('/', indexController.postPrediction);


module.exports = router;