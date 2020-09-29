<template>
  <div>
    <h1>Product List</h1>
    <img
      v-if="loading"
      src="https://i.imgur.com/JfPpwOA.gif"
    >
    <ul>
      <li v-for="(product, i) in products" :key="i">
        {{product.title}} - {{product.price | currency}} - {{product.inventory}}
        <button @click="addProductToCart(product)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import shop from '@/api/shop'
export default {
  data: () => ({
    loading: false
  }),

  computed:{
    products(){
      return this.$store.getters.availableProducts
    }
  },

  created(){
    this.loading=true
    this.$store.dispatch('fetchProducts').then(
      () => this.loading =false
    )
  },

  methods: {
    addProductToCart(product){
      this.$store.dispatch('addProductToCart', product)
    }
  }
}
</script>

<style scoped>

</style>