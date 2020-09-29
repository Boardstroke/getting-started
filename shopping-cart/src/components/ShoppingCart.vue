<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="(product, i) in products" :key="i">{{product.title}} - {{product.price}} - {{product.quantity}} </li>
    </ul>
    <p>{{total | currency}}</p>
  </div>
</template>
<script>
export default {
  computed:{
    products() {
      return this.$store.getters.cartProducts
    },
    total() {
      return this.$store.getters.cartTotal
    },
  }
}
</script>