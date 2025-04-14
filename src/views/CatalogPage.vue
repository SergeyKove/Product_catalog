<template>
  <header>
    <HeaderPage />
  </header>
  <body>
    <CatalogBrands />
    <CatalogProducts />
  </body>
</template>

<script setup>
import CatalogProducts from '@/components/Products/CatalogProducts.vue'
import CatalogBrands from '@/components/Brand/CatalogBrands.vue'
import HeaderPage from '@/components/HeaderPage.vue'
</script>
