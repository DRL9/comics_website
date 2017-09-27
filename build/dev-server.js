const express = require('express')
    , webpack = require('webpack')
    , webpackHotMiddleware = require('webpack-hot-middleware')
    , webpackDevMiddleware = require('webpack-dev-middleware')
    , webpackConfig = require('./webpack.dev.conf')
    , opn = require('opn')
    , connectHistoryApiFallback = require('connect-history-api-fallback')
    , apiRouter = require('../server/api.js')
    ;

const app = express();
const compiler = webpack(webpackConfig);
const PORT = 8013;
const indexUri = `http://localhost:${PORT}/`;

const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true
    }
});

devMiddleware.waitUntilValid(() => {
    opn(indexUri);
});

app.use('/api', apiRouter);
app.use(connectHistoryApiFallback());

app.use(devMiddleware);
app.use(webpackHotMiddleware(compiler, {
    heartbeat: 5 * 1000
}));

app.listen(PORT);
