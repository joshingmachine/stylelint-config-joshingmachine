const SPACES_PER_INDENT = 4

module.exports = {
    rules: {
        indentation: [
            SPACES_PER_INDENT,
            {
                except: [],
                ignore: [],
                indentClosingBrace: false,
                indentInsideParens: null,
            },
        ],
    },
}
