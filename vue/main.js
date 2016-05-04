import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import home from './views/home.vue'
import discovery from './views/discovery.vue'
import about from './views/about.vue'

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/home': {
    component: home
  },
  '/discovery': {
    component: discovery
  },
  '/about': {
    component: about
  }
})

router.redirect({
  "*": "/home"
})

router.start(App,'app')
