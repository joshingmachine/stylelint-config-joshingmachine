module.exports = {
    rules: {
        'at-rule-no-unknown': [ true, {
            ignoreAtRules: [],
        }],
        'at-rule-blacklist': null,
        'at-rule-no-vendor-prefix': true,
        'at-rule-whitelist': null,
        'at-rule-empty-line-before': [ 'always', {
            except: [ 'first-nested' ],
            ignore: [ 'after-comment' ],
            ignoreAtRules: [],
        }],
    },
}
