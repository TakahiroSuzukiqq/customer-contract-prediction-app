var express = require('express');
var router = express.Router();


router.get('/', indexController.getAmlPrediction);

module.exports = router;
