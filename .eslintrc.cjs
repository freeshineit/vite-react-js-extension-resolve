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
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: 'React',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: 'React',
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
};
