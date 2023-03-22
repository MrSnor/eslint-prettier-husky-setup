module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'eslint-config-prettier'
    ],
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                paths: [
                    'src'
                ],
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx'
                ]
            }
        }
    },
    rules: {
        'no-unused-vars': [
            'warn'
        ],
        'react/react-in-jsx-scope': [
            'off'
        ],
        'import/namespace':[
            'off'
        ]
    },
    env: {
        browser: true
    }
};