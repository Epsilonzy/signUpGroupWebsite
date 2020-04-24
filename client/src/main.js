import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css'
import axios from 'axios';

Vue.use(iView);
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})