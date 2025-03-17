import {ref} from 'vue'
import { defineStore } from 'pinia'
import { getProducts } from '../api/product'

export interface Product {
  id: number;
  title: string;
  price: number;
  inventory: number;
}

export const useProductStore = defineStore('product', () => {
  // 使用 ref 创建一个响应式数组,用于存储商品数据
  // 数组的类型是 Product[] (Product 类型的数组)
  // 初始值为空数组 []
  const products =  ref([] as Product[])// 断言
  
  // 定义一个异步函数,用于加载商品数据
  const loadProducts = async () => {
    // 使用 getProducts 函数从 API 获取商品数据
    // 这里假设 getProducts 是一个异步函数,返回一个 Promise<Product[]>
    const result = await getProducts()
    products.value = result
  }
  
  return {
    products,
    loadProducts
  }
})