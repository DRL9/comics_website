import { expect } from 'chai'
import Vue from 'vue'
import { mount } from 'vue-test-utils'
import ChaptorPage from '@/components/ChaptorPage.vue'

describe('components', () => {
    describe('ChaptorPage.vue', () => {
        it('expect pageArray with 2 right elements', () => {
            const vm = mount(ChaptorPage, {
                propsData: {
                    pagePerCount: 10,
                    totalChaptorCount: 22
                }
            }).vm;
            expect(vm.pageArray).to.deep.equal(['11 - 20话', '21 - 22话']);
        });
        it('expect pageArray is right when last page only 1 chaptor', () => {
            const vm = mount(ChaptorPage, {
                propsData: {
                    pagePerCount: 10,
                    totalChaptorCount: 21
                }
            }).vm;
            expect(vm.pageArray).to.deep.equal(['11 - 20话', '21话']);
        });
        it('expect pagination event emit right pageNum', () => {
            const wrapper = mount(ChaptorPage, {
                propsData: {
                    pagePerCount: 10,
                    totalChaptorCount: 22
                }
            });
            const btns = wrapper.findAll('button');
            btns.trigger('click');
            expect(wrapper.emitted().pagination[0]).to.deep.equal([1]);
            expect(wrapper.emitted().pagination[1]).to.deep.equal([2]);
        });
    });
});