<script setup>
import { ref } from 'vue';
import LifecycleComponent from './components/LifecycleComponent.vue';

// option 选项式API -> 组合式Composition API
const showComponent = ref(true);
const toggleComponent = () => {
    showComponent.value = !showComponent.value;
}

const count = ref(0);
const incrementCount=()=>{
  count.value++;
}

const width=ref(100);
const change=()=>{
  width.value=width.value+100;
}

</script>
<template>
  <div>
    <button @click="toggleComponent">Toggle Component</button>
    <button @click="incrementCount">Increment Count</button>
    <p>Count: {{count}}</p>
    <transition name="fade">
    <LifecycleComponent v-show="showComponent" :count="count"/>
    </transition>
    
    <div class="box1" :style="{width:width+'px'}"></div>
   
    <button @click="change">click</button>
    <!--  vue内置组件 -->
    <transition name="fade">
     <h1 v-if="showComponent">你好 vue transition</h1>
   </transition>
 </div>
</template>

<style scoped>
 .box1{
  width:100px;
  height:100px;
  background-color:#d88986;
  transition:width 1s;
 
}

/* 定义淡入淡出的过渡效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active 在 Vue < 2.1.8 */ {
  opacity: 0;
}
</style>