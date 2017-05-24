var tmi = require('tmi.js');
var oauth = require ('./oauth.js');

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "e_juice",
        password: oauth.password
    },
    channels: ["lifecoach_1337"]
}

var client = new tmi.client(options);

client.connect();

client.on("connected", function(address, port){
    client.action("lifecoach_1337", "Herzlich Wilkommen in der VapeNation!");
});