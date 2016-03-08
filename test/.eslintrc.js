module.exports = {
    "extends": "../.eslintrc.js",
    "env": {
        "mocha": true,
        "node": true,
        "browser": true
    },
  "rules": {
    "no-magic-numbers": 0, // this catches dumb things like string.indexOf(substring) >= 0 to see if a substring is found
    "newline-after-var": 0
  }
};
