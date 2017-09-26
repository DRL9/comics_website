const webpackConfig = require('../build/webpack.test.conf.js')
    ;

module.exports = (config) => {
    config.set({
        frameworks: ['mocha'],
        browsers: ['Chrome'],
        files: [
            './index.js'
        ],
        preprocessors: {
            './index.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        reporters: ['spec', 'coverage'],
        coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: 'lcov', surdir: '.' },
                { type: 'text-summary' }
            ]
        },
        port: 9877,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        concurrency: Infinity
    });
}