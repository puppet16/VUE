<script setup>
 // 获取从父元素传递的参数
 const props = defineProps(["propsName", "propsUrl"])
console.log(props);
    
</script>

<template>

<h3>Header</h3>

<h4>propsName: {{ props.propsName }}</h4>
<h4>propsUrl: {{ props.propsUrl }}</h4>
<hr>
</template>

<style scoped>

</style>