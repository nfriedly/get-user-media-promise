const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.commonjs,
            ...globals.amd,
            "Promise": false,
        },
    },

    "extends": "eslint:recommended",
}]);
