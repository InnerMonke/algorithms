module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "max-lines": ["error", { max: 300 }],
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    eqeqeq: "error",
    "no-else-return": ["error", { allowElseIf: false }],
    "@typescript-eslint/prefer-regexp-exec": "off",
    "prefer-destructuring": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/no-duplicate-imports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/sort-type-union-intersection-members": "error",
    "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
  },
  overrides: [],
  parserOptions: {
    tsconfigRootDir: ".",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSXs
    },
  },
  settings: {},
};
