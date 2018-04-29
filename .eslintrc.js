module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "strict": ["error", "global"],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ],
        "key-spacing": [
            "error",
            { "afterColon": true }
        ],
        "no-console": 0,
        "eqeqeq": "error",
        "no-control-regex": 0
    },
    "globals": {
        "Vue": false,
        "VueRouter": false,
        "axios": false,
        "console": true,
        "document": true,
        "location": false,
        "window": false,
        "alert": false
    },
    "env": {
        "jquery": true
    }
};
