/*
Vue SPA 入口文件 (文件注释)
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
// 引入purecss
// import '../node_modules/purecss/build/pure-min.css'
// 引入基本css方法
import './style/base.css'

// vuex store instance
import store from './store/store'
import routerMap from './base/routes'

Vue.use(VueRouter);

const router = new VueRouter();

routerMap(router);
sync(store, router);

router.start(App,'app')
