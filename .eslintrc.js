module.exports = {
    "env": {
        "node": true, // this is the best starting point
        "browser": true, // for react
        "es6": true, // enables es6 features
        "jest": true
    },
    "parser": "babel-eslint", // needed to make babel stuff work properly
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        
      }
};