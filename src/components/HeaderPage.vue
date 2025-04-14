<template>
  <div class="flex-row">
    <img src="/src/assets/images/logo.png" />
    <router-link to="/about" class="relative">
      <img class="cart" src="/src/assets/images/cart.png" />
      <span class="cart-count">{{ countCart }}</span>
    </router-link>
  </div>
  <hr />
</template>

<script setup>
import { computed } from 'vue'
import { useCatalogStore } from '@/stores/ProductStore'
const catalogStore = useCatalogStore()

const countCart = computed(() => {
  return catalogStore.cart.length
})
</script>

<style scoped>
.cart {
  width: 50px;
  height: 50px;
}

hr {
  margin: 5px;
  margin-bottom: 20px;
  border: 2px solid black;
  border-radius: 10px;
}

.cart-count {
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
  border: 1px solid black;
  border-radius: 100%;
  padding-left: 5px;
  padding-right: 5px;
}
.relative {
  position: relative;
}
</style>
