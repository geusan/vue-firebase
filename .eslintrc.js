module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  // *.vue 파일을 lint 하기위해서 필요함
  plugins: [
    'html'
  ],
  // 여기에 커스텀룰을 추가합니다.
  rules: {
    "semi": "off",
    "comma-dangle": "off",
    'linebreak-style': "off",
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "max-len": ["error", 130, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'object-curly-newline': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'no-alert': 'off',
    'no-plusplus': 'off',
    'prefer-destructuring': 'off',
    'no-continue': 'off',
    'no-else-return': 'off',
    'global-require': 'off',
    'consistent-return': 'off',
    "object-curly-spacing": ["error", "always"],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/no-cycle': 'off',
    'no-empty': ['error', {
      'allowEmptyCatch': true
    }],
    'import/prefer-default-export': 'off'
  },
  globals: {}
}