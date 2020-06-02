
function showConnectionDiv() {
    document.getElementById('connect-div').style.display='block';
    // setTimeout(onConnectionDone, 2000);
}

function setConnectionCode(number) {
    document.getElementById('connection-code').innerHTML = number;
}


function onConnectionDone() {
    document.getElementById('connect-div').style.display='none';
    document.getElementById('stream-div').style.display='block';
    document.getElementById('stream-vid').play();
}


function onInterupt(vid_to_show, timeOut) {
    document.getElementById('overlay-vid').src = vid_to_show;
    document.getElementById('overlay-vid').play();
    document.getElementById('connect-div').style.display='none';
    document.getElementById('stream-div').style.display='none';
    document.getElementById('overlay-div').style.display='block';
    document.getElementById('stream-vid').pause();
    setTimeout(resumePlayback, timeOut * 1000);
}

function startFromTheTop() {
    document.getElementById('connect-div').style.display='none';
    document.getElementById('stream-div').style.display='block';
    document.getElementById('overlay-div').style.display='none';
    document.getElementById('overlay-vid').pause();
    document.getElementById('overlay-vid').currentTime = 0;
    document.getElementById('stream-vid').currentTime = 0;
    document.getElementById('stream-vid').play();
}

function resumePlayback() {
    document.getElementById('connect-div').style.display='none';
    document.getElementById('stream-div').style.display='block';
    document.getElementById('overlay-div').style.display='none';
    document.getElementById('overlay-vid').pause();
    document.getElementById('overlay-vid').currentTime = 0;
    document.getElementById('stream-vid').play();

}


function showNewProfile(pref) {
    document.getElementById('notify').innerHTML =`Profile Set to ${pref}`;
    document.getElementById('notify').style.display = 'block';
    
    setTimeout(hideNotify, 1000);
}

function hideNotify() {
    document.getElementById('notify').style.display = 'none';

}

export {
    showConnectionDiv,
    onConnectionDone,
    onInterupt,
    startFromTheTop,
    resumePlayback,
    showNewProfile,
    hideNotify,
    setConnectionCode
};