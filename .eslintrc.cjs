module.exports = {
  extends: ['xx'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      'tsconfig.json',
      'tsconfig.node.json',
      'jest.config.ts',
      'vite.config.ts',
      'vitest.setup.ts',
    ],
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
};
