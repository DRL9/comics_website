export default {
    /**
     * 获取漫画图片的url
     * @param {String} comicsID
     * @param {Number} chaptor
     * @param {Number} page
     * @return {Promise}
     */
    getComicsUrl(comicsID, chaptor, page) {
        return new Promise((resolve, reject) => {
            resolve({
                url: 'http://pic04.ishuhui.com/cartoon/book-1/1/878-9396/03.png?90530854'
            });
        });
    }
}