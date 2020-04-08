# AdEngine
AdEngine POC to enable and enhance targeted advertising on TVs.


## Setting up
This project is setup to work a single page app.

The root directory provides the UX for the `on-premise` device.

The /controller directory provides the UX for a `controller` to manuplate/update device status for demo.

## On-premise Functions
* `ui_utils.js` hosts UI functions, using DOM manuplations
* `adengine_utils.js` has business logic. (For Rahul)
* `kaaro.js` is our main entry JS file.

## Assets
Under `adengine_utils.js` we have the `adMatrix`

This is where we list all the Ad assets in json format.
