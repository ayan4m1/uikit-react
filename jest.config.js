module.exports = {
  "transform": {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "testMatch": [
    "<rootDir>/src/**/__test__/**/*.{js,tsx}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,tsx}"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/lib/"
  ],
  "moduleNameMapper": {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  "setupFiles": [
    "<rootDir>/config/polyfills.js"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "json"
  ]
};
