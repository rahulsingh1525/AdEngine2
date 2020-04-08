
import { adMatrix, fetchAdsBasedOnPreference } from "./adengine_utils.js";
import { 
    showConnectionDiv,
    onConnectionDone,
    onInterupt,
    startFromTheTop,
    resumePlayback,
    showNewProfile,
    hideNotify } from "./ui_utils.js";



var pref = `home`;
var number = 1111;

document.addEventListener('DOMContentLoaded', function(){ 
    // pushThePlayButton();
    // setTimeout(pushThePlayButton, 2600);  
    showConnectionDiv();
}, false)

var ID = function () {
    return (
        "_" +
        Math.random()
            .toString(36)
            .substr(2, 9)
    );
};
var client = new Paho.Client("wss://api.akriya.co.in:8084/mqtt",
    `clientId-adEngine-onPrem-${ID()}`
);

client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({ onSuccess: onConnect });

// called when the client connects
function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    
    let message = new Paho.Message("Hello");
    message.destinationName = `adEngine/on-prem/dev1/presence`;
    client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}

// called when a message arrives
function onMessageArrived(message) {
    if (message.topic === `adEngine/${number}/controls`) {
        // we do based on Controls
        if(message.payloadString === `play-ad`) {
            let vid = fetchAdsBasedOnPreference(pref);
            onInterupt(vid.src, vid.length);
        }
    } else if (message.topic === `adEngine/${number}/connected`) {
        // onConnectionDone();
    } else if (message.topic === `adEngine/${number}/profile`) {
        pref = message.payloadString;
        console.log('setting new profile');
        showNewProfile(pref);
    } else if (message.topic === 'adEngine/all/controls') {
        if(message.payloadString === `play-ad`) {
            onInterupt();
        } else if (message.payloadString === 'start-start') {
            startFromTheTop();
        }
    }
    console.log("onMessageArrived:" + message.payloadString);
}


function sendConformationToMobile(message_in) {
    let message = new Paho.Message('Connected to Device ID');
    message.destinationName = `adEngine/${message_in}/connected`;
    client.send(message);
    subToRequiredTopics(message_in);
    onConnectionDone();
}

function subToRequiredTopics(number) {
    client.subscribe(`adEngine/${number}/connected`);
    client.subscribe(`adEngine/${number}/controls`);
    client.subscribe(`adEngine/${number}/profile`);
    client.subscribe(`adEngine/all/controls`);
}

let dev_id = '1111';
document.getElementById('btn-click').onclick =  () => {
    console.log('Clicked');
    dev_id = document.getElementById('connection_code').value;
    number = dev_id;
    sendConformationToMobile(dev_id);
    console.log(`Device Id set to ${dev_id}`);
};
