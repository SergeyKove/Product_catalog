import { createRouter, createWebHistory } from 'vue-router'
import ProductCatalog from '../views/CatalogPage.vue'
import ProductCart from '../views/CartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductCatalog,
    },
    {
      path: '/about',
      name: 'about',
      component: ProductCart,
    },
  ],
})

export default router
