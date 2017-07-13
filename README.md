1. Description  
  This is the contract prediction app using AWS ML.  
  You can check people between 18 - 51(for now) will make the contract or not.  
  When you'll get the rate mens how much will the customer make a contract.  

2. Issue  
  * When trying to choose sex female param(male: 1, female:2), it causes error, so please use "0", instead of "2".  
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
    
      