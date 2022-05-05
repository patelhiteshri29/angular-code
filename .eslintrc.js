module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.*?.json"
        ],
        createDefaultProgram: true
      },
      extends: [
        "plugin:@angular-eslint/recommended",
        // This is required if you use inline templates in Components
        "plugin:@angular-eslint/template/process-inline-templates",
        // AirBnB Styleguide rules
        "airbnb-typescript/base",
        // Settings for Prettier
        "prettier",
        "plugin:prettier/recommended",
        "plugin:you-dont-need-momentjs/recommended"
      ],
      rules: {
        "@angular-eslint/component-class-suffix": "off",
        "@angular-eslint/directive-class-suffix": "off",
        "@angular-eslint/no-conflicting-lifecycle": "off",
        "@angular-eslint/no-input-rename": "off",
        "@angular-eslint/no-output-native": "off",
        "@angular-eslint/no-output-on-prefix": "off",

        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-useless-constructor": "off",

        "class-methods-use-this": "off",
        "consistent-return": "off",
        "default-case": "off",
        "dot-notation": "off",

        "import/no-cycle": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",

        "max-classes-per-file": "off",

        "no-control-regex": "off",
        "no-irregular-whitespace": [
          "error",
          {
            "skipStrings": true,
            "skipComments": true,
            "skipRegExps": true,
            "skipTemplates": true,
          }
        ],
        "no-multi-assign": "off",
        "no-nested-ternary": "off",
        "no-param-reassign": "off",
        "no-prototype-builtins": "off",
        "no-return-assign": "off",
        "no-underscore-dangle": "off",
        "no-useless-escape": "off",
        "no-plusplus": "off",
        "prefer-destructuring": "off",
        "prefer-object-spread": "off",
        "@typescript-eslint/ban-types": [
          "error",
          {
            "types": {
              "{}": "Use a more appropriate type instead"
            }
          }
        ],
        "prettier/prettier": ["error", {
          "endOfLine":"auto"
        }],
      }
    },
    {
      files: ["*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
      }
    }
  ]
};
