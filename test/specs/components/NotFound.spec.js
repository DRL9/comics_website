import { expect } from 'chai'
import Vue from 'vue'
import NotFound from '@/components/NotFound.vue'

describe('components/', () => {
    describe('NotFound.vue', () => {
        const Constructor = Vue.extend(NotFound);
        const vm = new Constructor().$mount();

        it('click button can back to home page', (done) => {
            const eventObj = new Event('click');
            vm.$el.querySelector('button').dispatchEvent(eventObj);
            vm._watcher.run();
            Vue.nextTick(() => {
                expect(location.href).to.contain('/');
                done();
            })
        });
    });
});