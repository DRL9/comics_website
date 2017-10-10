const Mock = require('mockjs')
    ;

const Random = Mock.Random;
Random.id()
const comicInfoTpl = {
    id: '@id',
    coverImg: Random.image('100x200', Random.color(), '@name'),
    name: Random.ctitle(1, 3),
    intro: Random.cparagraph(3, 10),
    author: Random.cname(),
    chaptorTitles: function () {
        let arr = [];
        let len = Random.integer(1, 200);
        for (let i = 0; i < len; i++) {
            arr.push(Random.ctitle())
        }
        return arr;
    }
}

const comicsInfos = new Map();
const comicsChaptorInfos = new Map();
const comicsCount = Random.integer(10, 20);

for (let i = 0; i < comicsCount; i++) {
    let comicsInfo = Mock.mock(comicInfoTpl);
    comicsInfos.set(comicsInfo.id, comicsInfo);
}

for (let comicsInfo of comicsInfos.values()) {
    for (let chaptor = 0; chaptor < comicsInfo.chaptorTitles.length; chaptor++) {
        let imgList = [];
        for (let i = 0; i < Random.integer(10, 20); i++) {
            imgList.push(Random.image('800x1200', Random.color()));
        }
        comicsChaptorInfos.set(`${comicsInfo.id}-${chaptor}`, {
            title: comicsInfo.chaptorTitles[chaptor],
            imgList
        })
    }
}


module.exports = {
    hasComicsInfo(comicsId) {
        return comicsInfos.has(comicsId);
    },
    getComicsInfo(comicsId) {
        return comicsInfos.get(comicsId)
    },
    filterComics(condition) {
        var arr = [];
        for (let comics of comicsInfos.values()) {
            arr.push(comics);
        }
        return arr;
    },
    getComicsChaptorInfo(comicsId, chaptor) {
        return comicsChaptorInfos.get(`${comicsId}-${chaptor}`);
    },
    getComicsUrl(comicsId, chaptor, page) {
        return {
            url: comicsChaptorInfos.get(`${comicsId}-${chaptor}`).imgList[page]
        }
    }
}