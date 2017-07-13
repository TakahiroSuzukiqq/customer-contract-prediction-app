require('dotenv').config()

var express = require('express');
var AWS = require('aws-sdk');

var router = express.Router();
var indexController = require('../controllers/indexController')


router.get('/', indexController.getAmlPrediction);

module.exports = router;


// module.exports = function prediction() {

// //    var hoge = require('db')
// // hoge.connect({
// //   ACCESS_KEY_ID: process.env.ACCESS_K_ID,
// //   SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_K,

// // })


//     var ENDPOINT = "https://machinelearning.us-east-1.amazonaws.com";
//     var REGION = "us-east-1";
//     var ACCESS_KEY_ID = "AKIAIER2XXMXEFU5GLIA";
//     var SECRET_ACCESS_KEY = "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";
// ;

//     var ML_MODEL_ID = "ml-wHCNapTYAwo";

//     var PREDICT_ENDPOINT = "https://realtime.machinelearning.us-east-1.amazonaws.com";

	
//     var PARAM_ID = "0"; 
//     var PARAM_AGE = "27"; 
//     var PARAM_SEX = "1"; 

//     var machinelearning = new AWS.MachineLearning({
//         apiVersion: '2014-12-12',
//         endpoint: ENDPOINT,
//         region: REGION,
//         accessKeyId: ACCESS_KEY_ID,
//         secretAccessKey: SECRET_ACCESS_KEY
//     });
//     var params = {
//       MLModelId: ML_MODEL_ID, 
//       PredictEndpoint: PREDICT_ENDPOINT, 
//       Record: {
//         'id' : PARAM_ID,
//         'age' : PARAM_AGE,
//         'sex' : PARAM_SEX
//       }
//     };
//     machinelearning.predict(params, function(err, data) {
//       if (err) {
//           console.log(err, err.stack); 
//       }
//       else {
//           console.log(data);          
//           alert("Accuracy "+Math.round(data.Prediction.predictedScores[0]*100)+"%");
//       }
//     });
// }