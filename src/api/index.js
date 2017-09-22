export default {
    /**
     * 获取漫画某一章节的信息
     * @param {String} comicsID
     * @param {Number} chaptor
     * @return {Promise}
     * @todo 具体实现未完成
     */
    getComicsChaptorInfo(comicsID, chaptor) {
        return new Promise((resolve, reject) => {
            if (comicsID == 'commics1' && chaptor == 1) {
                return resolve({
                    title: '毛皮组',
                    imgList: ['http://pic04.ishuhui.com/cartoon/book-1/1/878-9396/03.png?90530854',
                        'http://pic04.ishuhui.com/cartoon/book-1/1/878-9396/03.png?90530854']
                });
            }
            var err = new Error('没有该漫画');
            err.code = 404;
            reject(err);
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
            resolve({
                url: 'http://pic04.ishuhui.com/cartoon/book-1/1/878-9396/03.png?90530854'
            });
        });
    }
}