import js from '@eslint/js'
import globals from 'globals'
import * as tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
	{ ignores: ['dist'] },
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json'
			},
			globals: globals.node
		},
		plugins: {
			'@typescript-eslint': tseslint
		},
		rules: {
			...js.configs.recommended.rules,
		}
	}
]