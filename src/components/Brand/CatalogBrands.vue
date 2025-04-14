<template>
  <ul class="create-line">
    <li><button class="glow-on-hover" @click="catalogStore.allProducts()">Все</button></li>
    <BrandItem
      v-for="brand in brands"
      :key="brands.id"
      :brand="brand"
      @click="catalogStore.filter(brand.id)"
    />
  </ul>
</template>

<script setup>
import { useCatalogStore } from '@/stores/ProductStore'
import { computed } from 'vue'
import BrandItem from '@/components/Brand/BrandItem.vue'

const catalogStore = useCatalogStore()
catalogStore.getBrands()

const brands = computed(() => {
  return catalogStore.brands
})
</script>

<style>
.create-line {
  height: 550px;
  border-right: 3px solid black;
  margin-right: 10px;
}
</style>
