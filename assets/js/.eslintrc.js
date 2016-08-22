module.exports = {
    "env": {
        "browser": true,
        "jquery": true,
    },
    "extends": "eslint:recommended",
    "rules": {
        "linebreak-style": "error",
        "array-bracket-spacing": "error",
        "block-spacing": "error",
        "yoda": "error",
        "comma-spacing": "error",
        "eol-last": "error",
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": "error",
        "no-lonely-if": "error",
        "key-spacing": "error",
        "no-whitespace-before-property": "error",
        "semi": "error",
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "semi-spacing": "error",
        "space-before-blocks": "error",
        "operator-linebreak": "error",
        "operator-assignment": "error",
        "no-mixed-operators": "error",
        "camelcase": "error",
        "spaced-comment": "error",
        "curly": "error",
        "indent": ["error", 4],
        "quote-props": ["error", "consistent"],
        "max-len": ["error", 140],
        "func-style": ["error", "declaration"],
        "keyword-spacing": [
            "error", {
                "before": true,
                "after": false,
                "overrides": {
                    "else": {"after": true},
                    "try": {"after": true},
                    "return": {"after": true}
                }
            }
        ],
        "space-unary-ops": [
            "error", {
                "words": true,
                "nonwords": false,
                "overrides": {
                    "new": false,
                }
            }
        ],
        "quotes": [
            "error",
            "single",
            {"avoidEscape": true}
        ],
        "brace-style": [
            "error",
            "stroustrup",
            {"allowSingleLine": true}
        ],
        "space-before-function-paren": [
            "error", {
                "anonymous": "always",
                "named": "never"
            }
        ],
        "no-console": [
            "error",
            {allow: ["warn", "error"]}
        ],
        "newline-per-chained-call": [
            "error",
            {"ignoreChainWithDepth": 3}
        ],
        "no-multiple-empty-lines": [
            "error",
            {"max": 2}
        ],
        "id-blacklist": ["error", "value", "val", "key"],
        "id-length": [
            "error", {
                "min": 4,
                "exceptions": [
                    "i", "j", "k",
                    "e", "ev", "xhr", "url", "URL",
                    "a", "b",
                    "tr", "div"
                ]
            }
        ],
        "dot-notation": [
            "warn",
            {"allowPattern": "^.*?_.*$"}
        ],
        "no-undef": "off",
    }
};
