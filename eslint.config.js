import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import { includeIgnoreFile } from '@eslint/compat';
import { fileURLToPath } from 'node:url';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default [
	includeIgnoreFile(gitignorePath),
	{
		files: ['**/*.ts', '**/*.svelte', '**/*.svelte.ts'],
		ignores: ['wxt.config.ts', 'wxt-env.d.ts'],
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
