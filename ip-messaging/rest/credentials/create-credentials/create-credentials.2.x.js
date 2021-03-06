var accountSid = 'ACCOUNT_SID';
var authToken = 'AUTH_TOKEN';
var IpMessagingClient = require('twilio').IpMessagingClient;

var client = new IpMessagingClient(accountSid, authToken);

client.credentials.create({
    type: 'TYPE',
    apiKey: 'APIKEY',
    friendlyName: 'FRIENDLY_NAME'
}).then(function(response) {
    console.log(response);
}).fail(function(error) {
    console.log(error);
});