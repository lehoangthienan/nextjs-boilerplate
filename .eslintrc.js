module.exports = {
    parser: 'babel-eslint',
    extends: 'airbnb',
    plugins: ['redux-saga', 'react', 'jsx-a11y'],
    env: {
      browser: true,
      node: true,
      jest: true,
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      'arrow-parens': [
        'error',
        'always'
      ],
      'arrow-body-style': [
        2,
        'as-needed'
      ],
      'prefer-destructuring': 0,
      'prefer-promise-reject-errors': 0,
      'arrow-body-style': [2, 'as-needed'],
      'class-methods-use-this': 0,
      'comma-dangle': [2, 'always-multiline'],
      'import/imports-first': 0,
      'import/newline-after-import': 0,
      'import/no-dynamic-require': 0,
      'import/no-extraneous-dependencies': 0,
      'import/no-named-as-default': 0,
      'import/no-unresolved': 2,
      'import/no-webpack-loader-syntax': 0,
      'import/prefer-default-export': 0,
      'indent': [
        2,
        2,
        {
          'SwitchCase': 1
        }
      ],
      'jsx-a11y/aria-props': 2,
      'jsx-a11y/heading-has-content': 0,
      'jsx-a11y/label-has-for': 2,
      'jsx-a11y/mouse-events-have-key-events': 2,
      'jsx-a11y/role-has-required-aria-props': 2,
      'jsx-a11y/role-supports-aria-props': 2,
      'jsx-a11y/anchor-is-valid': 0,
      'max-len': 0,
      'newline-per-chained-call': 0,
      'no-confusing-arrow': 0,
      'no-console': 1,
      'no-use-before-define': 0,
      'react/prefer-stateless-function': 0,
      'react/no-array-index-key': 0,
      'no-param-reassign': 0,
      'no-shadow': 0,
      'no-nested-ternary': 0,
      'prefer-template': 2,
      'react/jsx-closing-tag-location': 0,
      'react/forbid-prop-types': 0,
      'react/jsx-first-prop-new-line': [2, 'multiline'],
      'react/jsx-filename-extension': 0,
      'react/jsx-no-target-blank': 0,
      'react/require-default-props': 0,
      'react/require-extension': 0,
      'react/self-closing-comp': 0,
      'react/sort-comp': 0,
      'redux-saga/no-yield-in-race': 2,
      'redux-saga/yield-effects': 2,
      'require-yield': 0,
      'no-underscore-dangle': 0,
      'no-plusplus': 0,
      'no-restricted-syntax': 0,
      'linebreak-style': 0,
      'react/destructuring-assignment': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-noninteractive-element-interactions':0,
    },
    settings: {
      'import/resolver': {
        webpack: {
          config: './internals/webpack/webpack.prod.babel.js',
        },
      },
    },
  };
  