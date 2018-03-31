module.exports = {
    rules: {
        // Possible errors
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [],
            },
        ],
        // Limit language features
        'at-rule-blacklist': null,
        'at-rule-no-vendor-prefix': true,
        'at-rule-whitelist': null,
        // Stylistic issues
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
                ignoreAtRules: [],
            },
        ],
        'at-rule-name-case': 'lower',
        'at-rule-name-newline-after': 'always-multi-line',
        'at-rule-name-space-after': 'always',
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-semicolon-space-before': 'never',
    },
}
