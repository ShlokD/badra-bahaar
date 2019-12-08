module.exports = {
  extends: ["standard", "standard-preact"],
  settings: {
    react: {
      version: "999.999.999"
    }
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  env: {
    es6: true,
    jest: true
  },
  plugins: ["jest", "prettier", "import"],
  rules: {
    quotes: [2, "double"],
    semi: [2, "always"],
    "space-before-function-paren": [0, "never"]
  }
};
