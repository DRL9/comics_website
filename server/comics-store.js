const Mock = require('mockjs')
    ;

const Random = Mock.Random;
const comicsInfos = new Map();
const comicsChaptorInfos = new Map();
const comicsCount = Random.integer(10, 20);

for (let i = 0; i < comicsCount; i++) {
    Random.increment();
    let id = 'c' + '@increment';
    let comicsInfo = Mock.mock({
        id,
        coverImg: Random.image(`${Random.integer(120, 150)}x${Random.integer(180, 220)}`, Random.color(), '@name'),
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
    });
    comicsInfos.set(comicsInfo.id, comicsInfo);
}

for (let comicsInfo of comicsInfos.values()) {
    for (let chaptor = 0; chaptor < comicsInfo.chaptorTitles.length; chaptor++) {
        let imgList = [];
        for (let i = 0; i < Random.integer(10, 20); i++) {
            imgList.push(Random.image(`${Random.integer(1100, 1300)}x${Random.integer(1400, 2000)}`, Random.color()));
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
    hasComicsChaptorInfo(comicsId, chaptor) {
        return comicsChaptorInfos.has(`${comicsId}-${chaptor}`);
    },
    getComicsUrl(comicsId, chaptor, page) {
        return {
            url: comicsChaptorInfos.get(`${comicsId}-${chaptor}`).imgList[page]
        }
    },
    hasComicsUrl(comicsId, chaptor, page) {
        return comicsChaptorInfos.has(`${comicsId}-${chaptor}`)
            && comicsChaptorInfos.get(`${comicsId}-${chaptor}`).imgList.length > page;
    }
}