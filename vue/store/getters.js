/*
* @Author: dingyiming
* @Date:   2016-04-26 08:22:57
* @Last Modified by:   dingyiming
* @Last Modified time: 2016-04-26 08:23:00
*/

'use strict';
export const cartProducts = state => {
  return state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      title: product.title,
      price: product.price,
      quantity
    }
  })
}
