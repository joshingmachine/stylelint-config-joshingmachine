module.exports = {
    rules: {
        // Possible errors
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        // Limit language features
        'function-blacklist': null,
        'function-url-no-scheme-relative': true,
        'function-url-scheme-blacklist': null,
        'function-url-scheme-whitelist': null,
        'function-whitelist': null,
        // Stylistic issues
        'function-comma-newline-after': null,
        'function-comma-newline-before': null,
        'function-comma-space-after': 'always',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-url-quotes': [ 'never', {
            except: [],
        }],
        'function-whitespace-after': 'always',
    },
}
