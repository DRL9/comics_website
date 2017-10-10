import { expect } from 'chai'
import Vue from 'vue'
import ComicsChaptor from '@/components/ComicsChaptor.vue'
import router from '@/router/index.js'

describe('components', () => {
    describe('ComicsChaptor.vue', () => {
        const propsData = {
            chaptorTitles: ['', ''],
            comicsId: 'sdsd'
        };
        const Constructor = Vue.extend(ComicsChaptor);
        const vm = new Constructor({
            propsData,
            router
        }).$mount();

        it(`expect ${propsData.chaptorTitles.length} <a>`, () => {
            expect(vm.$el.querySelectorAll('a').length).to.equal(propsData.chaptorTitles.length);
        });

        it('<a> is right', () => {
            expect(vm.$el.querySelector('a').getAttribute('href')).to.equal(`/ComicsView/${propsData.comicsId}/0`);
        });
    });
});