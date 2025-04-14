import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const urlProducts = '/products.json'
const urlBrands = '/brands.json'

export const useCatalogStore = defineStore('catalog', () => {
  const products = ref([])
  const brands = ref([])
  const cart = ref([])
  const productsFilter = ref([])

  const totalPrice = computed(() =>
    cart.value
      .reduce((sum, item) => sum + item.product.regular_price.value * item.count, 0)
      .toFixed(2),
  )

  async function getProducts() {
    const data = await axios.get(urlProducts)
    products.value = data.data
    productsFilter.value = data.data
  }

  async function getBrands() {
    const data = await axios.get(urlBrands)
    brands.value = data.data
  }

  function allProducts() {
    productsFilter.value = products.value
  }

  function filter(id) {
    const filter = products.value.filter((item) => item.brand === id)
    productsFilter.value = filter
  }

  function cartDelete(id) {
    const filter = cart.value.filter((item) => item.id !== id)
    cart.value = filter
  }

  function cartRemove() {
    cart.value = []
  }

  function addItemCart(attributeProduct, props) {
    const finded = cart.value.find(
      (element) =>
        element.product === props.product &&
        element.size === attributeProduct.size &&
        element.color === attributeProduct.color,
    )
    if (finded === undefined) {
      cart.value.push({
        id: Math.random(),
        count: 1,
        color: attributeProduct.color,
        size: attributeProduct.size,
        product: props.product,
      })
    } else {
      finded.count++
    }
  }

  return {
    products,
    brands,
    getProducts,
    getBrands,
    filter,
    cart,
    cartDelete,
    cartRemove,
    totalPrice,
    addItemCart,
    productsFilter,
    allProducts,
  }
})
