'use strict';

import Addcommunity from '../views/Addcommunity'
import Testview from '../views/Testview'
import Shopingcart from '../views/Shoppingcart'
import Notfound from '../common/404.vue'

export default function(router){
    router.map({
    '/':{
        component: Addcommunity
    },
    '/test':{
        component: Testview
    },
    '/shop':{
        component: Shopingcart
    },
    /* 404路由 */
    '*': {
        component: Notfound
    }
})
}
