<template>
    <div>
      <h2>CompA</h2>
      <p>count: {{ count }}</p>
      <button @click="increment">Add</button>
      <!-- <CompSubA :count="props.count"/> -->
    </div>
  </template>
  
  <script setup>
  // 引入中央模块
  import { useCounterStore } from '../store/counter'; 
  const counterStore = useCounterStore();
  console.log(counterStore)
  const { count, increment } = counterStore;
  
  </script>
  
  <style scoped>
  
  </style>