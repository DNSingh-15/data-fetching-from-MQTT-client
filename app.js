var mqtt = require('mqtt');
const fs = require('fs');


// var certFile = fs.readFileSync("/home/hmicro/practice/mqtt_subscriber/subscriber/certs/caMqttRoot.crt");
var certFile = fs.readFileSync("./caMqttRoot.pem")

var options = {
    username: 'username',
    password: 'abc',
    keepalive: 60,
    reconnectPeriod: 1000,
    ca: certFile,
};
var client = mqtt.connect('mqtts://url:8883', options);

console.log("starting")

client.on('connect', function () { // When connected
    console.log('connected');
    // subscribe to a topic
    client.subscribe('subscribe url', function (err) {
        // console.log(err)
    });

});



client.on('message', function (topic, message) {

    var a = JSON.parse(message)
    // console.log(a)

    var data = []
    var pid = ["PatchId"];
    pid.forEach(key => {
        var patchIds = a[key];
        data.push(patchIds)
    })


    var Sdata = ["SensorData"]
    Sdata.forEach(key => {
        var SensorData = a[key];
        // console.log(SensorData)

        var data1 = []
        if (SensorData == null) {
            data1.push(SensorData)
        } else {
            for (i = 0; i < SensorData.length; i++) {
                var Seqnum = SensorData[i].Seq
                data1.push(Seqnum)
            }
        }
        console.log((data).slice(-1)[0], (data1).slice(-1)[0])

    })
});
