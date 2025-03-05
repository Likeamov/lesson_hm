<template>
    <div>
     <EmitChid @myClick=""/>
    </div>
</template>

<script setup>
import EmitChid from "./EmitChid.vue";
const onMyClick = (msg) => {
console.log(msg);
}
</script>

<style scoped>

</style>