import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
	{
		files: ['src/**/*.{ts,svelte}'],
		ignores: ['wxt.config.ts', 'wxt-env.d.ts', '.wxt/types/'],
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

	prettier,

	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			'no-undef': 'off'
		}
	}
];
