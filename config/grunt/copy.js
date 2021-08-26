module.exports = {
    404: {
        files: [
            {
                cwd: 'src/',
                dest: 'build/reliable-web-summit-2021/',
                expand: true,
                src: ['404.html']
            }
        ]
    },
    assets: {
        files: [
            {
                cwd: 'build/reliable-web-summit-2021/',
                dest: 'build/reliable-web-summit-2021/assets/',
                expand: true,
                src: ['*.ico', '*.jpg', '*.png']
            }
        ]
    },
    scripts: {
        files: [
            {
                cwd: 'build/reliable-web-summit-2021/',
                dest: 'build/reliable-web-summit-2021/scripts/',
                expand: true,
                src: ['**/!(ngsw-worker).js']
            }
        ]
    },
    styles: {
        files: [
            {
                cwd: 'build/reliable-web-summit-2021/',
                dest: 'build/reliable-web-summit-2021/styles/',
                expand: true,
                src: ['**/*.css']
            }
        ]
    }
};
