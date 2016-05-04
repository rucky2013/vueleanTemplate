import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routerMap from './base/routes'

Vue.use(VueRouter);

const router = new VueRouter();

routerMap(router);

router.start(App,'app')
