const express = require('express');
const bodyParser = require('body-parser');
const dockerLambda = require('docker-lambda');
const AWS = require('aws-sdk');

// Configure AWS DynamoDB with local DynamoDB
AWS.config.update({
    region: "eu-west-2",
    endpoint: "http://localhost:8000"
});
const dynamodb = new AWS.DynamoDB();

// Local lambda function
const lambdaCallbackResult = dockerLambda({event: {some: 'event'}})
module.exports = async function(event){

}

// Configure express
const app = express();
app.use(bodyParser);
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{

})

app.listen(port, ()=>{
    console.log(`server started on part ${port}`)
})
