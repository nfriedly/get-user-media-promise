const { defineConfig } = require("eslint/config");
const globals = require("globals");
const js = require("@eslint/js");

module.exports = defineConfig([
	{ files: ["**/*.js"], languageOptions: { globals: {
        ...globals.browser, 
        ...globals.node, 
        ...globals.amd,
        ...globals.mocha, // tests only
    } } },
	{ files: ["**/*.js"], plugins: { js }, extends: ["js/recommended"] },
]);
