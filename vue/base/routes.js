'use strict';

import Addcommunity from '../views/Addcommunity.vue'
import Testview from '../views/Testview.vue'
import Notfound from '../common/404.vue'
import home from '../views/home.vue'
import discovery from '../views/discovery.vue'
import about from '../views/about.vue'


export default function(router){
    router.map({
    '/':{
        component: Addcommunity
    },
    '/test':{
        component: Testview
    },
    '/home': {
      component: home
    },
    '/discovery': {
      component: discovery
    },
    '/about': {
      component: about
    },
    /* 404路由 */
    '*': {
        component: Notfound
    }
})
}
