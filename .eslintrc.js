module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'google'
  ],
  globals: {
    __static: true
  },
  // required to lint *.vue files
  plugins: [
    'vue',
    'html'
  ],
   // add your custom rules here
  rules: {
     // allow async-await
     'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines': [2, { max: 2 }],
    'max-len': [
      "error", 
      { "code": 140, "tabWidth": 4, "comments": 140,  "ignoreUrls": true }
    ]
  }
}
