import { expect } from 'chai'
import Vue from 'vue'
import ComicsInfo from '@/components/ComicsInfo.vue'
import router from '@/router/index.js'

describe('components', () => {
    describe('ComicsInfo.vue', () => {
        const propsData = {
            comicsId: '111',
            author: 'ss',
            totalChaptor: 10,
            intro: 'sdsd',
            coverImg: 'http://bing.com/1.jpg',
            name: 'sd'
        }
        const Constructor = Vue.extend(ComicsInfo);
        const vm = new Constructor({
            propsData, router
        }).$mount();

        it('<img> is right', () => {
            expect(vm.$el.querySelector('img').getAttribute('src')).to.equal(propsData.coverImg);
        });
    });
});