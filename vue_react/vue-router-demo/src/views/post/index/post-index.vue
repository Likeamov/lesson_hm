<template>
    <div>
    postIndex
    {{sort}}
    </div>
</template>

<script setup>
import { defineProps} from 'vue'
const props = defineProps({
    sort:String
})
const { sort } = props //可读性
</script>

<style lang="scss" scoped>

</style>