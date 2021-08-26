module.exports = {
    default: {
        files: [
            {
                cwd: 'build/reliable-web-summit-2021',
                dest: 'build/reliable-web-summit-2021',
                expand: true,
                src: ['**/*.html']
            }
        ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            removeComments: true
        }
    }
};
