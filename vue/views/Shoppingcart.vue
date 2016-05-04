<template>
  <div class="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>

<script>
import ProductList from '../components/Shoppingcart/ProductList.vue'
import Cart from '../components/Shoppingcart/Cart.vue'
export default {
  components: { ProductList, Cart }
}
</script>

<style>

</style>
