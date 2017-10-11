import { expect } from 'chai'
import Vue from 'vue'
import { mount } from 'vue-test-utils'
import ComicsChaptor from '@/components/ComicsChaptor.vue'
import router from '@/router/index.js'

describe('components', () => {
    describe('ComicsChaptor.vue', () => {
        const propsData = {
            chaptorTitles: ['', ''],
            comicsId: 'sdsd'
        };
        const wrapper = mount(ComicsChaptor, {
            propsData,
            router
        });

        it(`expect ${propsData.chaptorTitles.length} <a>`, () => {
            expect(wrapper.findAll('.list a').length).to.equal(propsData.chaptorTitles.length);
        });

        it('<a> is right', () => {
            expect(wrapper.find('.list a').hasAttribute('href', `/ComicsView/${propsData.comicsId}/0`)).to.be.true;
        });

    });
});
