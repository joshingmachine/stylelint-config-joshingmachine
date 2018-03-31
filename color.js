module.exports = {
    rules: {
        // Possible errors
        'color-no-invalid-hex': true,
        // Limit language features
        'color-named': [ 'always-where-possible', {
            ignore: [],
            ignoreProperties: [],
        }],
        'color-no-hex': null,
        // Stylistic issues
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
    },
}
