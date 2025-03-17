import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useProductStore } from './product'

type CartItem = {
  productId: number;
  quantity: number;
}

export const useCartStore = defineStore('cart', () => {
  // <T>
  // vue3 vue2 区别？ 
  // vue3 全面支持 ts  99% 代码ts写的
  const items = ref<CartItem[]>([])
  const productStore = useProductStore()
  // items.value.push(1)
  // 使用computed计算属性监听items的变化
  // 当items数组发生变化时(添加、删除、修改数量)，会自动重新计算totalPrice
  const totalPrice = computed(() => {
    // 累加和
    return items.value.reduce((total, item) => {
      // 根据商品ID在商品列表中查找对应商品
      const product = productStore.products.find(p => p.id === item.productId)
      // 如果找到商品,计算该商品的总价(单价 * 数量)并加到总计中
      // 如果未找到商品,加 0 到总计中
      return total + (product ? product.price * item.quantity : 0)
    }, 0) // 初始值为0
  })

  return {
    items,
    totalPrice
  }
})