var number = Math.floor(Math.random() * 8888) + 1111;

function beginTheThing() {
    init();
}
function init() {
    document.getElementById('connection_code').innerHTML = number;
    document.getElementById('connection_code').setAttribute('aria-label', `Connection Code is ${number}`);
    let btn = document.getElementById('init-btn');
    // var pointer = document.getElementById('the-pointer-to-show');
    btn.style.display = "none";
};

// init();
function perform_vibration(type = 1) {
    if (type == 0) {
        window.navigator.vibrate(300);
    } else if (type == 1) {
        window.navigator.vibrate([20, 30, 20,30,20]);
    } else if (type == 2) {
        window.navigator.vibrate([20]);
    }
    // } else {
    //     document.write('value is null');
    // }
}

var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return (
        "_" +
        Math.random()
            .toString(36)
            .substr(2, 9)
    );
};
var client = new Paho.Client("wss://api.akriya.co.in:8084/mqtt",
    `clientId-adEngine-mobile-${ID()}`
);

// var client = new Paho.Client(
//     "api.akriya.co.in",
//     8083,
//     `clientId-91springboard_${ID}`
//   );


// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({ onSuccess: onConnect });

// called when the client connects
function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    client.subscribe(`adEngine/${number}/connected`);
    client.subscribe(`adEngine/${number}/detected`);
    let message = new Paho.Message("Hello");
    message.destinationName = `adEngine/${number}/detected`;
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
    if (message.topic === `adEngine/${number}/detected`) {
        perform_vibration(0);
    } else if (message.topic === `adEngine/${number}/connected`){
        show_options();
    }
    console.log(message);
    console.log("onMessageArrived:" + message.payloadString);
}

function show_options() {
    document.getElementById('options-div').style.display = 'block';
}

function sendAdInterupt() {
    let message = new Paho.Message('play-ad');
    message.destinationName = `adEngine/${number}/controls`;
    client.send(message);
}

function sendAdInteruptToAll() {
    let message = new Paho.Message('play-ad');
    message.destinationName = `adEngine/all/controls`;
    client.send(message);
}
function sendStartFromTheTop() {
    let message = new Paho.Message('start-start');
    message.destinationName = `adEngine/all/controls`;
    client.send(message);
}

document.getElementById('showAd').onclick = () => {
    sendAdInterupt();
}

document.getElementById('start-all').onclick = () => {
    sendStartFromTheTop();
}
document.getElementById('inter-all').onclick = () => {
    sendAdInteruptToAll();
}

function sendPref(str) {
    console.log(str);
    let message = new Paho.Message(str);
    message.destinationName = `adEngine/${number}/profile`;
    client.send(message);
}
