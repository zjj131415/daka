module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.wpy files
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  // add your custom rules here
  'rules': {
    "quotes": 0,
    "semi": [0],
    "no-undef": 0,
    "padded-blocks": 0,
    "no-multiple-empty-lines": [0],
    "no-trailing-spaces": [0],
    "comma-dangle": [0],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0,
    "indent": 0,
    "comma-spacing": 0,
    "key-spacing": 0,
    "no-multi-spaces": 0,
    "spaced-comment": 0,
    "spaced-comment": 0,
    " no-unused-vars": 0,
    "eol-last": 0,
    "no-unused-vars": 0,
    "space-before-blocks": 0,
    "new-parens": 0,
    "space-infix-ops": 0,
    "no-unreachable": 0,
    "keyword-spacing": 0,
    "no-empty-pattern": 0
  }
}
