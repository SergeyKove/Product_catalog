<template>
  <div class="cart">
    <img src="/src/assets/images/logo.png" />
    <h1>Корзина</h1>
    <Cart />
  </div>
</template>

<script setup>
import Cart from '@/components/Cart/Cart.vue'
</script>

<style scoped>
.cart {
  border-radius: 2px;
  padding: 10px;
  background-color: white;
  box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.514);
}

.cart img {
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
</style>
