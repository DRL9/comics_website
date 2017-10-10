const path = require('path')
    , express = require('express')
    , connectHistoryApiFallback = require('connect-history-api-fallback')
    , apiRouter = require('./server/api.js')
    ;

const app = express();
const PORT = 8020;

app.use('/api', apiRouter);
app.use(connectHistoryApiFallback());
app.use(express.static(path.resolve('./dist')));

module.exports = app.listen(PORT, () => {
    console.log(`server listen ${PORT}`)
});
