module.exports = (grunt) => {
    const fix = grunt.option('fix') === true;

    return {
        'analyze': {
            cmd: `npx ng build --configuration production --source-map --stats-json && \
                webpack-bundle-analyzer build/reliable-web-summit-2021/stats.json`
        },
        'build': {
            cmd: 'npx ng build --base-href /reliable-web-summit-2021/ --configuration production --subresource-integrity'
        },
        'continuous': {
            cmd: 'npx ng test'
        },
        'e2e': {
            cmd: `npx playwright install --with-deps && \
                npx playwright test --config config/playwright/config.ts`
        },
        'lint-config': {
            cmd: `eslint --config config/eslint/config.json --ext .js ${fix ? '--fix ' : ''}--report-unused-disable-directives *.js config/`
        },
        'lint-src': {
            cmd: `htmlhint --config config/htmlhint/document.json 'src/**/index.html' && \
                htmlhint --config config/htmlhint/template.json 'src/app/**/*.component.html' && \
                npx ng lint reliable-web-summit-2021 && \
                npx stylelint 'src/**/*.scss' --config config/stylelint/config.json`
        },
        'lint-test': {
            cmd: 'npx ng lint reliable-web-summit-2021 --configuration test'
        },
        'monitor': {
            cmd: 'npx ng serve'
        },
        'preview': {
            cmd: 'npx ng serve --configuration production'
        },
        'smoke': {
            cmd: `npx playwright install --with-deps && \
                IS_SMOKE_TEST=true npx playwright test --config config/playwright/config.ts && \
                npx hint --telemetry=off https://chrisguttandin.github.io/reliable-web-summit-2021`
        },
        'test': {
            cmd: 'npx ng test --watch false'
        },
        'verify': {
            cmd: `npx bundle-buddy build/reliable-web-summit-2021/browser/*.js.map && \
                grep -r build/reliable-web-summit-2021/browser/*.js.map -e '/environments/environment.ts'; test $? -eq 1`
        }
    };
};
