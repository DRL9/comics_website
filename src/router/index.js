import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '@/views/Main.vue';
import NotFound from '@/components/NotFound.vue';
import ComicsContent from '@/views/ComicsContent.vue';
import ComicsView from '@/views/ComicsView.vue';

Vue.use(VueRouter);

export const routerParamsNames = {
    comicsId: 'comicsId',
    chaptor: 'chaptor'
};

export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: Main
        },
        {
            path: `/ComicsView/:${routerParamsNames.comicsId}`,
            name: 'comicsView',
            component: ComicsView
        },
        {
            path: `/ComicsView/:${routerParamsNames.comicsId}/:${routerParamsNames.chaptor}`,
            name: 'comicsContent',
            component: ComicsContent
        },
        {
            path: '/notFound',
            alias: '*',
            name: '404',
            component: NotFound
        }
    ]
});