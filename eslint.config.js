import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import {globalIgnores} from 'eslint/config'
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths'

export default tseslint.config([
    globalIgnores(['dist']),
    {
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            "no-relative-import-paths": noRelativeImportPaths,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],
            "no-relative-import-paths/no-relative-import-paths": [
                "warn",
                {"rootDir": "src", "prefix": "@"}
            ],
        },
    },
])
