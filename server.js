const path = require('path')
    , express = require('express')
    ;

const app = express();

app.use(express.static(path.resolve('./dist')));

app.listen(8020);