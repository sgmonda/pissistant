module.exports = {
  'env': {
    'node' : true,
    'es6'  : true,
  },
  'parserOptions': {
    "ecmaVersion": 8,
    "sourceType": "module",
  },
  'globals': {
    describe: true,
    it: true,
    log: true,
    request: true,
    SETTINGS: true,
  },
  'extends' : 'eslint:recommended',
  'rules'   : {
    'array-callback-return'  : 'error',
    'arrow-spacing'          : 'error',
    'complexity'             : ['error', 60],
    'comma-dangle'           : ['error', 'always-multiline'],
    'comma-spacing'          : ['error', {before: false, after: true}],
    'dot-notation'           : 'error',
    'generator-star-spacing' : ['error', {'before': false, 'after': true}],
    'handle-callback-err'    : 'error',
    'sort-vars'              : 'error',
    'indent'                 : ['error', 2],
    'key-spacing'            : ['error', {
      multiLine  : {align: {beforeColon: true, afterColon: true, on: 'colon'}},
      singleLine : {beforeColon: false, afterColon: true},
    }],
    'linebreak-style'         : ['error', 'unix'],
    'max-lines'               : ['error', {max: 300}],
    'max-depth'               : ['error', {max: 5}],
    'no-unused-vars'          : 'error',
    'no-console'              : 'off',
    'no-duplicate-imports'    : 'error',
    'no-lone-blocks'          : 'error',
    'no-multi-spaces'         : 'error',
    'no-multiple-empty-lines' : ['error', {'max': 1}],
    'no-unused-expressions'   : 'error',
    'no-eq-null'              : 'error',
    'no-trailing-spaces'      : 'error',
    'object-curly-spacing'    : ['error', 'never'],
    'quotes'                  : ['error', 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    'space-infix-ops'         : ['error'],
    'semi'                    : ['error', 'always'],
    'yield-star-spacing'      : ['error', 'after'],
  },
};
