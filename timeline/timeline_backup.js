let timeLine = {
    "title": {
        "media": {
            "url": "https://akriya.co.in",
            "caption": "Ad Engine Timeline Title Placeholder.",
            "credit": ""
        },
        "text": {
            "headline": "AdEngine Timeline",
            "text": "<p>Timeline page, to create custom timelines based on <i>host stream schedule</i></p>"
        }
    },
    "events": [
        {
            "media": {
                "url": "./../small.mp4",
                "caption": "Small mp4.",
                "credit": "asd"
            },
            "start_date": {
                "millisecond": 0,
                "second": 0,
                "minute": 0,
                "hour": 0,
                
                "year": "2020"
            },
            "text": {
                "headline": "The Small",
                "text": ""
            }
        },
        {
            "media": {
                "url": "https://youtu.be/fSrO91XO1Ck",
                "caption": "",
                "credit": "<a href=\"http://unidiscmusic.com\">Unidisc Music</a>"
            },
            "start_date": {
                "millisecond": 0,
                "second": 50,
                "minute": 0,
                "hour": 0,
                
                "year": "2020"
            },
            "text": {
                "headline": "First Recording",
                "text": "At the age of 15 Houston was featured on Michael Zager's song, Life's a Party."
            }
        },
        {
            "media": {
                "url": "https://youtu.be/_gvJCCZzmro",
                "caption": "A young poised Whitney Houston in an interview with EbonyJet.",
                "credit": "EbonyJet"
            },
            "start_date": {
                "millisecond": 0,
                "second": 20,
                "minute": 1,
                "hour": 0,
                
                "year": "2020"
            },
            "text": {
                "headline": "The Early Years",
                "text": "As a teen Houston's credits include background vocals for Jermaine Jackson, Lou Rawls and the Neville Brothers. She also sang on Chaka Khan's, 'I'm Every Woman,' a song which she later remade for the <i>Bodyguard</i> soundtrack which is the biggest selling soundtrack of all time. It sold over 42 million copies worldwide."
            }
        },
        {
            "media": {
                "url": "https://youtu.be/H7_sqdkaAfo",
                "caption": "I'm Every Women as performed by Whitney Houston.",
                "credit": "Arista Records"
            },
            "start_date": {
                "millisecond": 0,
                "second": 40,
                "minute": 1,
                "hour": 0,
                
                "year": "2020"
            },
            "text": {
                "headline": "Early Album Credits",
                "text": "As a teen Houston's credits include background vocals for Jermaine Jackson, Lou Rawls and the Neville Brothers. She also sang on Chaka Khan's, 'I'm Every Woman,' a song which she later remade for the <i>Bodyguard</i> soundtrack which is the biggest selling soundtrack of all time. It sold over 42 million copies worldwide."
            }
        },
        {
            "media": {
                "url": "https://youtu.be/A4jGzNm2yPI",
                "caption": "Whitney Houston and Clive Davis discussing her discovery and her eponymous first album.",
                "credit": "Sony Music Entertainment"
            },
            "start_date": {
                "millisecond": 0,
                "second": 0,
                "minute": 3,
                "hour": 0,
                
                "year": "2020"
            },
            "text": {
                "headline": "Signed",
                "text": "Houston is signed to Arista Records after exec Clive Davis sees her performing on stage with her mother in New York."
            }
        },
        
    ]
};

// The TL.Timeline constructor takes at least two arguments:
// the id of the Timeline container (no '#'), and
// the URL to your JSON data file or Google spreadsheet.
// the id must refer to an element "above" this code,
// and the element must have CSS styling to give it width and height
// optionally, a third argument with configuration options can be passed.
// See below for more about options.
timeline = new TL.Timeline('timeline-embed', timeLine);
