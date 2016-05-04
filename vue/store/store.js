/*
* @Author: dingyiming
* @Date:   2016-04-26 08:21:49
* @Last Modified by:   dingyiming
* @Last Modified time: 2016-04-26 08:36:08
*/

import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import createLogger from './logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})