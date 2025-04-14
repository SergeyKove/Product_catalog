<template>
  <div v-if="cartItems.length !== 0">
    <ul>
      <li class="caption">
        <span class="caption_name">Товар</span>
        <span>Цена</span>
        <span>Количество</span>
        <span class="caption_total-price">Общая цена</span>
      </li>
      <CartItem v-for="cart in cartItems" :cart="cart" />
    </ul>

    <div class="delete_product">
      <router-link to="/"><button>Продолжить покупки</button></router-link>
      <button @click="catalogStore.cartRemove()">Удалить все товары</button>
    </div>
    <div class="price_order">
      <span>Общая сумма: ${{ catalogStore.totalPrice }}</span>
      <button @click="submit">Оформить заказ</button>
    </div>
  </div>

  <span v-else style="display: flex; flex-direction: column">
    <span>Добавьте товары в корзину</span>
    <router-link to="/"><button>К покупкам</button></router-link>
  </span>
</template>

<script setup>
import CartItem from '@/components/Cart/CartItem.vue'
import { useCatalogStore } from '@/stores/ProductStore'
import { computed } from 'vue'

const catalogStore = useCatalogStore()
const cartItems = computed(() => {
  return catalogStore.cart
})

function submit() {
  alert('Заказ успешно создан.')
}
</script>

<style scoped>
.price_order {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.price_order button {
  margin-top: 5px;
}

.delete_product button {
  margin-right: 10px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: rgba(240, 88, 88, 0.288);
}

ul {
  margin-bottom: 10px;
}

li {
  width: 600px;
}

.caption {
  display: flex;
  gap: 10px;
  font-size: 14px;
  border-bottom: 1px solid black;
}

.caption_name {
  margin-right: auto;
  margin-left: 100px;
}

.caption_total-price {
  margin-right: 25px;
}
</style>
