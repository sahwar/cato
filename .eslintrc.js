"use strict";

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended"],
  "globals": {
    "chrome": true
  },
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    "accessor-pairs": "error",
    "array-bracket-spacing": "error",
    "array-callback-return": "error",
    "arrow-parens": ["error", "always"],
    "arrow-spacing": ["error", {
      "after": true,
      "before": true
    }],
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": ["error", "stroustrup"],
    "comma-dangle": "error",
    "comma-spacing": ["error", {
      "after": true,
      "before": false
    }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": "error",
    "consistent-this": ["error", "that"],
    "curly": "error",
    "default-case": "error",
    "dot-location": ["error", "property"],
    "dot-notation": ["error", {
      "allowKeywords":
       true
     }],
    "eqeqeq": "error",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "func-names": ["error", "always"],
    "generator-star-spacing": "error",
    "global-require": "error",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-length": "error",
    "id-match": "error",
    "indent": "off",
    "init-declarations": "off",
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": "off",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "error",
    "lines-around-directive": "error",
    "max-depth": "error",
    "max-len": "off",
    "max-lines": "error",
    "max-nested-callbacks": "error",
    "max-params": ["error", 4],
    "max-statements-per-line": "error",
    "new-cap": "error",
    "new-parens": "error",
    "newline-per-chained-call": "error",
    "no-caller": "error",
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-extend-native": "error",
    "no-extra-parens": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inner-declarations": "off",
    "no-invalid-this": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-mixed-operators": "off",
    "no-mixed-requires": "error",
    "no-multi-assign": "off",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-native-reassign": "error",
    "no-negated-condition": "error",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-plusplus": "error",
    "no-process-env": "error",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sync": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "off",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "off",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-spacing": ["error", "never"],
    "object-shorthand": "error",
    "one-var": "off",
    "one-var-declaration-per-line": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-reflect": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": "off",
    "quotes": "off",
    "radix": "error",
    "require-await": "error",
    "require-jsdoc": ["error", {
      "require": {
        "ArrowFunctionExpression": false,
        "ClassDeclaration": true,
        "FunctionDeclaration": true,
        "MethodDefinition": true
      }
    }],
    "rest-spread-spacing": "error",
    "semi": "off",
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": "off",
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always"],
    "template-curly-spacing": ["error", "never"],
    "template-tag-spacing": "error",
    "unicode-bom": ["error", "never"],
    "valid-jsdoc": [
      "error", {
        "prefer": {
          "arg": "param",
          "argument": "param",
          "class": "constructor",
          "return": "returns",
          "virtual": "abstract"
        },
        "requireParamDescription": false,
        "requireReturnDescription": false
      }],
      "yoda": ["error", "never"]
    }
};
