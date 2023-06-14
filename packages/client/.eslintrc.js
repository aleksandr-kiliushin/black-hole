module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/jsx-sort-props': ['warn', { ignoreCase: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
