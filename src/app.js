import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './components/Main.vue'
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter);

var router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component: Main
        },
        {
            path: '*', component: NotFound
        }
    ]

});

new Vue({
    el: '#app',
    router
});