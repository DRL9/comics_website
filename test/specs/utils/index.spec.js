import { expect } from 'chai'
import Vue from 'vue'
import router from '@/router/index.js'
import { handleError } from '@/utils/index.js'

describe('utils/', () => {
    describe('index.js', () => {
        it('handleError(err) can handle 404 error', (done) => {
            var error404 = new Error('');
            error404.code = 404;
            handleError(error404);
            Vue.nextTick(() => {
                expect(location.href).to.be.contain('/notFound')
                done();
            });
        });
        it('handleError(err) can handle other err', () => {
            var err = new Error('');
            handleError(err);
        });
    });
});