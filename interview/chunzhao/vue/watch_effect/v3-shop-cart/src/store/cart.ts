import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useProductsStore } from './product'

type CartItem = {
  productId: number;
  quantity: number;
}

export const useCartStore = defineStore('cart', () => {
  // <T>
  // vue3 vue2 区别？ 
  // vue3 全面支持 ts  99% 代码ts写的
  const items = ref<CartItem[]>([])
  const productStore = useProductsStore()
  // items.value.push(1)
  const totalPrice = computed(() => {
    // 累加和
    return items.value.reduce((total, item) => {
      // null
      const product = productStore.products.find(p => p.id === item.productId)
      // ES6 中的可选链操作符
      return total + (product ? product.price * item.quantity : 0)
    }, 0)
  })

  const getQuantity = (productId: number) => {
    const item = items.value.find(item => item.productId === productId)
    return item ? item.quantity : 0
  }

  const addToCart = (productId: number) => {
    const existingItem = items.value.find(item => item.productId === productId)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ productId, quantity: 1 })
    }
  }

  return {
    items,
    totalPrice,
    getQuantity,
    addToCart
  }
})