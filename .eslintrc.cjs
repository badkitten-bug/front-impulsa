module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['standard', 'plugin:react/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
	],
	rules: {
		'react/prop-types': 'off',
		'no-unused-vars': 'warn',
	},
};
