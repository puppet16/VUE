<script setup>
    import { onMounted, onUpdated, ref } from 'vue';

    onMounted(()=> {
        console.log("onMounted");
    })

    // 响应式数据更新导致的组件更新
    onUpdated(()=> {
        console.log("onUpdate");
    })

    const count = ref(0)

    const countAdd = () => {
        count.value++
    }

</script>

<template>

{{ count }} <Button @click="countAdd">添加数量</Button>
</template>

<style scoped>

</style>