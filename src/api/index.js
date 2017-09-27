import { NotFoundError } from '@/utils/error.js'

export default {
    /**
     * 获取漫画信息
     * @param {String} comicsId
     * @return {Promise}
     * @todo 具体实现未完成
     */
    getComicsInfo(comicsId) {
        return new Promise((resolve, reject) => {
            if (comicsId == 'comics1') {
                return resolve({
                    coverImg: 'http://rs.sfacg.com/web/comic/images/Logo/de61cff8-8066-46c2-82e9-b1871a8a5c38.jpg',
                    name: '海贼王',
                    intro: '冒险的漫画',
                    totalChaptor: 1
                });
            }
            reject(NotFoundError.getInstance());
        })
    },
    /**
     * 获取漫画某一章节的信息
     * @param {String} comicsID
     * @param {Number} chaptor
     * @return {Promise}
     * @todo 具体实现未完成
     */
    getComicsChaptorInfo(comicsID, chaptor) {
        return new Promise((resolve, reject) => {
            if (comicsID == 'comics1' && chaptor == 1) {
                return resolve({
                    title: '毛皮组',
                    imgList: ['https://static.boredpanda.com/blog/wp-content/uploads/2015/07/consent-rape-comics-alli-kerkham-2.jpg',
                        'https://phandroid.s3.amazonaws.com/wp-content/uploads/2017/03/Google-supply-shortages-s2017.03.13_nexus.png']
                });
            }
            reject(NotFoundError.getInstance());
        })
    },
    /**
     * 获取漫画图片的url
     * @param {String} comicsID
     * @param {Number} chaptor
     * @param {Number} page
     * @return {Promise}
     * @todo 具体实现未完成
     */
    getComicsUrl(comicsID, chaptor, page) {
        return new Promise((resolve, reject) => {
            if (comicsID == 'comics1' && chaptor == 1 && page == 1) {
                return resolve({
                    url: 'https://phandroid.s3.amazonaws.com/wp-content/uploads/2017/03/Google-supply-shortages-s2017.03.13_nexus.png'
                });
            }
            reject(NotFoundError.getInstance());
        });
    },
    /**
     * 查找漫画
     * @param {Object} queryConditions
     * @param {String} queryConditions.keyword
     * @return {Promise}
     */
    searchComics(queryConditions) {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    comicsId: 'comics1',
                    comicsName: '海贼王',
                    coverImg: 'http://rs.sfacg.com/web/comic/images/Logo/de61cff8-8066-46c2-82e9-b1871a8a5c38.jpg'
                }
            ])
        });
    }
}
