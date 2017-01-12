'use strict';

var assert = require('assert');
var getUserMedia = require('../lib/get-user-media-promise');

//var chrome = navigator.userAgent.indexOf('Chrome') >= 0;
var firefox = navigator.userAgent.indexOf('Firefox') >= 0;
var travis = process.env.TRAVIS;

describe('getUserMedia', function() {
  it('should exist', function() {
    assert(getUserMedia)
  });

  if (firefox && travis) {
    // firefox can auto-approve gum requests but cannot fake the output. So, on travis CI it always rejects them with NO_DEVICES_FOUND
    it('should reject when there are no audio devices available', function(done) {
      getUserMedia({audio: true, video: true})
        .then(function() {
          done(new Error('.then() should not be called when there are no media devices available'))
        })
        .catch(function() {
          done();
        });
    });
  } else {
    it('should return a MediaStream instance in supported browsers', function() {
      return getUserMedia({audio: true})
    });
  }

  // todo: add additional tests around what happens when various required globals don't exist
  // todo: test with require.js and in pollyfill mode
});
