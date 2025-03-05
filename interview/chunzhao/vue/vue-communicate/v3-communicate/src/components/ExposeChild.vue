<template>
    <div>
      ExposeChild
    </div>
</template>

<script setup>
defineExpose({
    childName: "child",
    someMethod() {
        console.log("child method")
    }
})
</script>

<style lang="scss" scoped>

</style>