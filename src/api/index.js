import { NotFoundError } from '@/utils/error.js'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export default {
    /**
     * 获取漫画信息
     * @param {String} comicsId
     * @return {Promise}
     */
    getComicsInfo(comicsId) {
        return new Promise((resolve, reject) => {
            Vue.http.get('/api/comicsInfo', {
                params: {
                    comicsId
                }
            }).then((res) => {
                let info = res.data;
                resolve({
                    coverImg: info['coverImg'],
                    name: info['name'],
                    intro: info['intro'],
                    author: info['author'],
                    chaptorTitles: info['chaptorTitles']
                })
            }, (res) => {
                reject(NotFoundError.getInstance());
            })
        })
    },
    /**
     * 获取漫画某一章节的信息
     * @param {String} comicsId
     * @param {Number} chaptor
     * @return {Promise}
     */
    getComicsChaptorInfo(comicsId, chaptor) {
        return new Promise((resolve, reject) => {
            Vue.http.get('/api/comicsChaptorInfo', {
                params: {
                    comicsId,
                    chaptor
                }
            }).then((res) => {
                let info = res.data;
                resolve({
                    title: info['title'],
                    imgList: info['imgList']
                })
            }, (res) => {
                reject(NotFoundError.getInstance());
            })
        })
    },
    /**
     * 获取漫画图片的url
     * @param {String} comicsId
     * @param {Number} chaptor
     * @param {Number} page
     * @return {Promise}
     */
    getComicsUrl(comicsId, chaptor, page) {
        return new Promise((resolve, reject) => {
            Vue.http.get('/api/comicsUrl', {
                params: {
                    comicsId,
                    chaptor,
                    page
                }
            }).then((res) => {
                resolve({
                    url: res.data['url']
                })
            }, (res) => {
                reject(NotFoundError.getInstance());
            })
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
            Vue.http.get('/api/filterComics', {
                params: {
                    condition: {}
                }
            }).then((res) => {
                let comicsInfos = res.data;
                let arr = [];
                comicsInfos.forEach((info) => {
                    arr.push({
                        comicsId: info['id'],
                        comicsName: info['name'],
                        coverImg: info['coverImg']
                    });
                });
                resolve(arr);
            })
        });
    }
}
