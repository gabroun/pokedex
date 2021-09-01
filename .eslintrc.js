const path = require("path");

module.exports = {
  extends: [
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    "react/prop-types": 0,
    "jsx-a11y/label-has-for": 0,
    "no-console": "warn",
  },
  plugins: ["react", "import", "jsx-a11y"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    "import/resolver": {
      alias: [
        ["@components", path.resolve(__dirname, "./src/components")],
        ["@styles", path.resolve(__dirname, "./src/styles")],
        ["@hooks", path.resolve(__dirname, "./src/hooks")],
        ["@utils", path.resolve(__dirname, "./src/utils")],
      ],
    },
  },
};
