<template>
  <div>
    ComponentA
  </div>
</template>

<script setup>
// import {useStore} from 'vuex'
import emitter from '../mitt'
const handleClick = () => {
  emitter.emit('handleChange');
}
</script>

<style scoped>

</style>

