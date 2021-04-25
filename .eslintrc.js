module.exports = {
    "extends": "airbnb",
    "parser":"babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true
        }
    },
    "globals": {
        "localStorage": true,
        "fetch": true,
        "window": true,
        "document": true,
        "FormData": true,
        "require": true,
        "__REDUX_DEVTOOLS_EXTENSION__": true,
    },
    "rules": {
        "react/prop-types": 0,
        "func-names": ["error", "never"],
        "no-shadow":"off",
        "max-len": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'jsx-a11y/no-static-element-interactions': [
            'error',
            {
                handlers: [
                    'onMouseDown',
                    'onMouseUp',
                    'onKeyPress',
                    'onKeyDown',
                    'onKeyUp',
                ],
            },
        ],
        "jsx-a11y/click-events-have-key-events": "off",
        "react/no-unescaped-entities": ["error", {"forbid": [">", "}"]}]
    }
};