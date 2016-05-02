import Vue from 'vue'
import Vue_Router from 'vue-router'

import routerMap from './base/routes'
import App from './App.vue'

Vue.use(Vue_Router)


let router = new Vue_Router({
    hashbang:true,
    history:false,
    saveScrollPosition: false,
    transitionOnLoad: true
})

//全局的前置钩子函数，在路由切换开始时调用
router.beforeEach(function(){
    window.scrollTo(0,0)
})

//独立出来的路由
routerMap(router)

//sync(store, router) // done.


router.start(App,'#app')
