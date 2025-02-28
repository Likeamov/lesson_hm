<template>
    <van-tabbar v-model="active" class="shadow-black shadow-2xl opacity-90">
        <van-tabbar-item to="/assistant">
            <template #icon>
                <van-icon class="iconfont" class-prefix="icon" name="AI" size="20"/>
            </template>
            AI识片酱
        </van-tabbar-item>
        <van-tabbar-item icon="play-circle" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="video" to="/video">好片</van-tabbar-item>
        <van-tabbar-item icon="manager" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script setup lang="ts">
import { ref,onMounted } from "vue";
import { useRoute } from "vue-router";
const active = ref<number>(0);
    onMounted(() => {
    const route = useRoute();
    const path = route.path;
    switch (path) {
      case "/assistant":
        active.value = 0;
        break;
      case "/home":
        active.value = 1;
        break;
      case "/video":
        active.value = 2;
        break;
      case "/mine":
        active.value = 3;
        break;
      default:
        active.value = 1;
        break;
    }
  })
</script>

<style scoped></style>
