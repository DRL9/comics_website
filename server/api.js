const express = require('express')
    , comicsStore = require('./comics-store')
    ;

const router = express.Router();

router.get('/comicsInfo', (req, res) => {
    var comicsId = req.query['comicsId'];
    if (comicsStore.hasComicsInfo(comicsId)) {
        res.json(comicsStore.getComicsInfo(comicsId));
    } else {
        res.statusCode = 404;
    }
    res.end();
});

router.get('/filterComics', (req, res) => {
    let condition = req.query['condition'];
    res.json(comicsStore.filterComics(condition))
    res.end();
});

router.get('/comicsChaptorInfo', (req, res) => {
    let comicsId = req.query['comicsId'];
    let chaptor = req.query['chaptor'];
    res.json(comicsStore.getComicsChaptorInfo(comicsId, chaptor));
    res.end();
});

router.get('/comicsUrl', (req, res) => {
    let comicsId = req.query['comicsId'];
    let chaptor = req.query['chaptor'];
    let page = req.query['page'];
    res.json(comicsStore.getComicsUrl(comicsId, chaptor, page));
    res.end();
})

router.use(/.+/, (req, res) => {
    res.statusCode = 404;
    res.end();
})

module.exports = router;