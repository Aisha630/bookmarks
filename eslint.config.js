import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';

export default [
	{
		files: ['src/**/*.{ts,svelte}'],
		plugins: {
			'@typescript-eslint': ts.plugin
		},
		languageOptions: {
			parser: ts.parser,
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: process.cwd()
			}
		},
		rules: {
			...ts.configs.recommendedTypeChecked.rules
		}
	},

	...svelte.configs.recommended,
	...svelte.configs.prettier,

	prettier
];
