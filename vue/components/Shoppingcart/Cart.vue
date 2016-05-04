<template>
  <div class="cart">
    <h2 class="youcart">Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<!--<style lang=scss> 了，而不是 <style lang="sass">-->
<!--需要单独 npm i sass-loader node-sass --save-dev -->
<style lang=scss>
.youcart{
  color:#e66;
}

</style>


<script>
import { checkout } from '../../store/actions'
import { cartProducts } from '../../store/getters'


export default {
  vuex: {
    getters: {
      products: cartProducts,
      checkoutStatus: ({ cart }) => cart.lastCheckout
    },
    actions: {
      checkout
    }
  },
  computed: {
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  }
}
</script>
