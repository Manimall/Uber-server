module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['eslint:recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {
		'no-unused-vars': 'error',
		'no-unreachable': 'error',
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
		'no-trailing-spaces': 'error',
		'quote-props': ['error', 'consistent-as-needed'],
		semi: ['error', 'always'],
		'no-empty': 'error',
	},
};
