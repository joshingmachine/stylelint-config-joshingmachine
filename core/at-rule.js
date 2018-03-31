const possibleErrors = {
    'at-rule-no-unknown': [
        true,
        {
            ignoreAtRules: [],
        },
    ],
}

const limitLanguageFeatures = {
    'at-rule-blacklist': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-whitelist': null,
}

const stylisticIssues = {
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
}

module.exports = {
    rules: Object.assign(
        {},
        possibleErrors,
        limitLanguageFeatures,
        stylisticIssues
    ),
}
