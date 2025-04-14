<template>
  <li>
    <div class="flex-start">
      <div>
        <img
          :src="
            cart.color === undefined
              ? cart.product.image
              : `src/assets/images/conf/${cart.color}.png`
          "
        />
      </div>
      <div class="flex-content">
        <span>Бренд: {{ cart.product.brand }} / {{ cart.product.title }}</span>
        <span v-if="cart.color !== undefined">Цвет: {{ cart.color }}</span>
        <span v-if="cart.size !== undefined">Размер: {{ cart.size }}</span>
      </div>
    </div>

    <div class="flex-end">
      <ProductPrice :price="cart.product.regular_price" />
      <select v-model="cart.count">
        <option v-for="i in 10" :value="i">{{ i }}</option>
      </select>
      <span> ${{ (cart.product.regular_price.value * cart.count).toFixed(2) }} </span>
      <button @click="catalogStore.cartDelete(cart.id)">
        <img src="/src/assets/images/cart-delete.png" />
      </button>
    </div>
  </li>
</template>

<script setup>
import ProductPrice from '@/components/Products/ProductPrice.vue'
import { useCatalogStore } from '@/stores/ProductStore'

const catalogStore = useCatalogStore()
const props = defineProps(['cart'])
</script>

<style scoped>
img {
  width: 60px;
  height: 60px;
}

li {
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
}

.flex-start {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.flex-end {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 25px;
}

.flex-end button {
  border: none;
  background: none;
}

.flex-end img {
  width: 20px;
  height: 25px;
}

.flex-end img:hover {
  border: 2px solid white;
}

.flex-content {
  display: flex;
  flex-direction: column;
}
</style>
