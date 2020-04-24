import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/pages/admin/index'
import login from '@/pages/login'
import signUp from '@/pages/signUp'


Vue.use(Router);
export default new Router({
    routes: [{
        path: '/admin',
        name: 'Admin',
        component: admin
    }, {
        path: '/login',
        name: 'Admin',
        component: login
    }, {
        path: '/',
        name: 'signUp',
        component: signUp
    }]
})