/*
* @Author: dingyiming
* @Date:   2016-04-26 08:24:01
* @Last Modified by:   dingyiming
* @Last Modified time: 2016-04-26 08:24:24
*/

'use strict';
import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART
} from '../mutation-types'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [RECEIVE_PRODUCTS] (state, products) {
    state.all = products
  },

  [ADD_TO_CART] (state, productId) {
    state.all.find(p => p.id === productId).inventory--
  }
}

export default {
  state,
  mutations
}