module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
  "rules": {
    "comma-dangle": "warn",
    "no-useless-escape": "warn",
    "no-restricted-syntax": "warn", // "warn",
    "@typescript-eslint/naming-convention": "warn",
    "@typescript-eslint/member-ordering": "off", // "warn",
    "@typescript-eslint/no-this-alias": "warn",

    "@typescript-eslint/ban-ts-comment": ["error",{
      "ts-expect-error": true,
      "ts-ignore": "allow-with-description",
      "ts-nocheck": true,
      "ts-check": false,
      "minimumDescriptionLength": 5
    }],

    "@angular-eslint/no-empty-lifecycle-method": "off",

    //need to research setTimeout callback
    "@typescript-eslint/no-implied-eval": "warn",

    "@typescript-eslint/no-unused-expressions": ["error", {
      "allowTernary": true
    }],

    "prefer-const": ["error", {
      "destructuring": "all"
    }],

    //
    "prefer-spread": "off",
    "no-console": "off",
    // used no-explicit-any instead
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",

    "@typescript-eslint/no-explicit-any": "error",
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],

    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ]
  }
}
