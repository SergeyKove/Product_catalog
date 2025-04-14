<template>
  <div class="flex">
    <h1>Каталог</h1>
    <ul class="container">
      <ProductItem v-for="product in products" :key="products.id" :product="product" />
    </ul>
  </div>
</template>

<script setup>
import { useCatalogStore } from '@/stores/ProductStore'
import { computed } from 'vue'
import ProductItem from '@/components/Products/ProductItem.vue'

const catalogStore = useCatalogStore()
catalogStore.getProducts()

const products = computed(() => {
  return catalogStore.productsFilter
})
</script>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

ul {
  list-style-type: none;
  padding-left: 0;
}
</style>
