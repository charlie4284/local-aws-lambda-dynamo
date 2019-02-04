const DynamoDbLocal = require('dynamodb-local');
const dynamoLocalPort = 8000;
 
DynamoDbLocal.launch(dynamoLocalPort, null, ['-sharedDb']) //if you want to share with Javascript Shell
    .then(function () {
 
        // do your tests
 
        DynamoDbLocal.stop(dynamoLocalPort);
    });