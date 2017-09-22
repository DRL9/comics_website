import router from '../router'

/**
 * 集中处理错误
 * @param {Error} err
 */
export function handleError(err) {
    if (err.code == 404) {
        router.push({ name: 404 });
    }
}