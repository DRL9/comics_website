const path = require('path')
    , express = require('express')
    , connectHistoryApiFallback = require('connect-history-api-fallback')
    ;

const app = express();

app.use(connectHistoryApiFallback());
app.use(express.static(path.resolve('./dist')));

app.listen(8020);