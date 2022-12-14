var mqtt    = require('mqtt');
var client  = mqtt.connect("infsvt3-ep3.lifesignals.com",{clientId:"mqttjs01"});
client.on("connect",function(){	
console.log("connected");
})
