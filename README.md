# get-user-media-promise

Light-weight wrapper for the newer [Promise]-based [MediaDevices.getUserMedia] API with a fallback to the deprecated [navigator.getUserMedia] (and it's prefixed variants)

Note: this will only work in web browsers.

Usage: 

 * With a bundler such as Require.js, Browserify, or WebPack: require() the module and it returns a `getUserMedia()` method that will always return a Promise or Promise-like object.
 * As a stand-alone pollyfill: when neither `define()` nor `module` are defined, the module will go into pollyfill mode, setting `navigator.mediaDevices.getUserMedia()` if that method is not already defined and doing nothing if it is.


[MediaDevices.getUserMedia]: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
[Promise]: https://developer.mozilla.org/en-US/docs/Web/API/Promise
[navigator.getUserMedia]: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia
