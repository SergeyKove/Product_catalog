<template>
  <li>
    <div>
      <img
        :src="
          attributeProduct.color === undefined
            ? product.image
            : `src/assets/images/conf/${attributeProduct.color}.png`
        "
      />
      <span>{{ product.title }}</span>
      <span>Бренд: {{ product.brand }}</span>
    </div>
    <span v-if="product.configurable_options">
      <ProductConfigurableOptions
        :items="product.configurable_options"
        v-model="attributeProduct"
      />
    </span>
    <span class="flex-row">
      <ProductPrice :price="product.regular_price" />
      <button class="glow-on-hover" @click="catalogStore.addItemCart(attributeProduct, props)">
        Купить
      </button>
    </span>
  </li>
</template>

<script setup>
import ProductPrice from '@/components/Products/ProductPrice.vue'
import { ref } from 'vue'
import { useCatalogStore } from '@/stores/ProductStore'
import ProductConfigurableOptions from '@/components/Products/ProductConfigurableOptions.vue'

const props = defineProps(['product'])
const catalogStore = useCatalogStore()
const attributeProduct = ref({})
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}

li {
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 2px 2px rgba(0, 0, 0, 0.493);
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  justify-content: space-between;
  background-color: white;
}

li div {
  display: flex;
  flex-direction: column;
}

button {
  width: 80px;
  height: 30px;
}
</style>
