import router from '../router'

/**
 * 集中处理错误
 * @param {Error} err
 */
export function handleError(err) {
    if (err.code == 404) {
        //使用replace， 防止当history.go(-1) 和按下浏览器返回键时，返回的又是前一个错误的页面
        router.replace({ name: 404 });
    }
}