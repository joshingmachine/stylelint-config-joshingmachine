const possibleErrors = {
    'block-no-empty': true,
}

const stylisticIssues = {
    'block-closing-brace-empty-line-before': [
        'never',
        {
            except: [],
        },
    ],
    'block-closing-brace-newline-after': [
        'always',
        {
            ignoreAtRules: [],
        },
    ],
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-after': 'never',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': [
        'always',
        {
            ignoreAtRules: [],
        },
    ],
}

module.exports = {
    rules: Object.assign({}, possibleErrors, stylisticIssues),
}
