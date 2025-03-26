<template>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <h3>{{ product.title }}</h3>
        <p class="price">¥{{ product.price.toFixed(2) }}</p>
        <p class="inventory">
          库存: {{ product.inventory - cartStore.getQuantity(product.id) }}
        </p>
        <button
          @click="cartStore.addToCart(product.id)"
          :disabled="cartStore.getQuantity(product.id) >= product.inventory"
        >
          {{ buttonText(product.id) }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useProductsStore } from '../store/product';
  import { useCartStore } from '../store/cart';
  import { computed, watch } from 'vue';
  
  const productsStore = useProductsStore();
  const cartStore = useCartStore();
  
  // 使用computed计算属性获取商品列表
  // 当productsStore.products发生变化时会自动更新
  const products = computed(() => productsStore.products);
  
  const buttonText = (productId: number) => {
    const product = products.value.find(p => p.id === productId);
    // 这里的 ! 是非空断言操作符，告诉TypeScript该值不会是null或undefined
    // 如果不确定是否存在，可以使用可选链操作符 ?. 代替
    const remaining = product ? product.inventory - cartStore.getQuantity(productId) : 0;
    return remaining > 0 ? '加入购物车' : '已售罄';
  };
  
  // 示例watch使用
  watch(
    () => cartStore.items, // 对象 执行一下
    () => {
      console.log('购物车变化:', cartStore.items);
    },
    { deep: true }
  );
  </script>
  
  <style scoped>
  .product-list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .product-card {
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 1rem;
    transition: box-shadow 0.3s;
  }
  
  .product-card:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  button {
    background: #42b983;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.3s;
  }
  
  button:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  
  .price {
    color: #f60;
    font-size: 1.2em;
    margin: 0.5rem 0;
  }
  
  .inventory {
    color: #666;
    margin: 0.5rem 0;
  }
  </style>