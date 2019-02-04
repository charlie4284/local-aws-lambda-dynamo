# Local AWS Lambda/DynamoDB 

## Pre-requisites
1. Java Runtime Environment (JRE)
- To have dynamo DB running on local machine, Java runtime environment is required
- sudo apt-get update
- sudo apt-get install default-jre

2. Docker
- To run Docker instance of Lambda function (Node version: 8.10)

3. Local DynamoDB(official) from AWS(Not required)
- More instructions from link below:
- https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html
- If not using a global local dynamo DB, dynamodb-local will install it for you in under the current directory

## Dependencies(npm)
1. express
2. body-parser
3. docker-lambda
4. aws-sdk
5. nodemon
6. dynamodb-local

## How to use
- "npm run-script start" to start local dynamoDB installation & to start expressJS setup in index.js 
- "npm run-script database" to start local dynamoDB server
- To modify AWS lambda function, write your code inside "module.exports = function ..." this will be read by docker lambda
- To modify request event, change the requestEvent.json