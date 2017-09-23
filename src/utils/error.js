export class NotFoundError {
    /**
     * @return {Error}
     */
    static getInstance() {
        var err = new Error('没有该漫画');
        err.code = 404;
        return err;
    }
}