<template>
    <div>
     ParentOne
    </div>
</template>

<script>
export default {
    props: ["msg1", "msg2"],
    setup(props){
        console.log(props)

    }
}
</script>

<style lang="scss" scoped>

</style>