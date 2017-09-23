import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/components/Main.vue'
import NotFound from '@/components/NotFound.vue'
import ComicsContent from '@/components/ComicsContent.vue'
import ComicsIntro from '@/components/ComicsIntro.vue'

Vue.use(VueRouter);

export const routerParamsNames = {
    comicsId: 'comicsId',
    chaptor: 'chaptor'
};

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component: Main
        },
        {
            path: `/ComicsView/:${routerParamsNames.comicsId}`,
            name: 'comicsIntro',
            component: ComicsIntro
        },
        {
            path: `/ComicsView/:${routerParamsNames.comicsId}/:${routerParamsNames.chaptor}`,
            name: 'comicsContent',
            component: ComicsContent
        },
        {
            path: '/notFound', alias: '*', name: '404', component: NotFound
        }
    ]
});
