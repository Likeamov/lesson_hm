import type { Product } from "../store/product";

const _products: Product[] = [
    { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
    { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
    { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 }
  ];

  export const getProducts =  () => {
    return new Promise<Product[]>((resolve) => {
        setTimeout(() => {
            // 通过 resolve 返回商品数据数组 _products
            // 这里模拟了异步 API 调用,在 2 秒延迟后返回数据
            resolve(_products)
        }, 2000)
    })
  }

  
