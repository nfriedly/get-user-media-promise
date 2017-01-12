module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "amd": true
    },
    "globals": {
      "Promise": false // this is automatic when setting es6:true, but we only care about this one feature, which is far more common then most other es6 features.
    },
    "extends": "eslint:recommended"
};
