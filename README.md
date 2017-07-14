1. Description  
  This is the contract prediction app using AWS ML.  
  You can check whether people will make a contract or not by AWS ML model's prediction.  
    
2. Issue  
   There are some issues for now so I am fixing these issues in parallel.
  * When trying to choose sex female param(male: 1, female:2), it causes error, so please use "0", instead of "2".  
  * Age input is preferable between 20 -51 because sometimes AWS ML model is not work correctly.  
  * Accuracy is very low for now.  
  * some params cause error when using particular number.

3. Reference  
   when you do prediction means press the button it cost me(amazon charge me), so just removed AWS IAM access key & secret key and AWS ML model ID for now(This project is under progress).  
    

4. Preparation  
  * Node.js app  
  * Amazon web service(AWS) account   
  * AWS S3 account and csv data file which you want to predict  
  * AWS Machine Learning Model and Model ID, Real-time endpoint  
  * AWS IAM Users account with the permission "AmazonMachineLearningRealTimePredictionOnlyAccess"  

 
5. Sample image  
  
   <a href="https://ibb.co/jApv2v"><img src="https://preview.ibb.co/bZZ69a/Screen_Shot_2017_07_13_at_11_57_54.png" alt="Screen_Shot_2017_07_13_at_11_57_54" border="0"></a><br />
       
     
    
  <a href="https://ibb.co/cGc4vF"><img src="https://preview.ibb.co/inPTNv/Screen_Shot_2017_07_13_at_11_59_20.png" alt="Screen_Shot_2017_07_13_at_11_59_20" border="0"></a><br />
    
6. Relation image
  <a href="http://ibb.co/ffcZfF"><img src="http://preview.ibb.co/bK0WSv/AWSML_diagram.png" alt="AWSML_diagram" border="0"></a><br/>  