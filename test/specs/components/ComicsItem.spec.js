import { expect } from 'chai'
import Vue from 'vue'
import ComicsItem from '@/components/ComicsItem.vue'
import router from '@/router/index.js'

describe('components/', () => {
    describe('ComicsItem.vue', () => {
        const propsData = {
            id: '111',
            coverImg: 'http://bing.com/1.jpg',
            name: 'sd'
        }
        const Constructor = Vue.extend(ComicsItem);
        const vm = new Constructor({
            propsData, router
        }).$mount();

        it('<a> is right', () => {
            expect(vm.$el.querySelector('a').getAttribute('href')).to.equal(`/ComicsView/${propsData.id}`);
        });

        it('<figcaption> is right', () => {
            expect(vm.$el.querySelector('figcaption').textContent.trim()).to.equal(propsData.name);
        });

        it('<img> is right', () => {
            expect(vm.$el.querySelector('img').getAttribute('src')).to.equal(propsData.coverImg);
            expect(vm.$el.querySelector('img').getAttribute('alt')).to.equal(propsData.id);
        });
    });
});
