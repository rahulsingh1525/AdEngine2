
var adMatrix = {
    "home" : [
        {
            src: "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4",
            length: 31
        },
        {
            src: "http://techslides.com/demos/sample-videos/small.webm",
            length: 6
        }
    ],
    "insurace": [
        {
            src: "./small.mp4",
            length: 6
        }
    ],
    "food" : [
        {
            src: "./dolbycanyon.mp4",
            length: 25
        }
    ]
};

// var timeLine = {
//     slides: {
//         starttime
//     }
// }



function fetchAdsBasedOnPreference(preference) {
    var vid_to_play = adMatrix[preference][0];
    return vid_to_play;
    // setTimeout(resumePlayback, vid_to_play.length * 1000);
    // return vid_to_play.src;
}

export {
    adMatrix,
    fetchAdsBasedOnPreference
};