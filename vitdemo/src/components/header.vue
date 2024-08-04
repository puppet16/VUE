<script setup>
 // 获取从父元素传递的参数
 const props = defineProps(["propsName", "propsUrl", "propsCount"])

console.log(props);


// 向父元素传递参数
const emits =  defineEmits(["getWeb", "userAdd"])

// 发送自定义事件
emits("getWeb", {"name":"Lee", "url": "www.google.com"})

const add = () => {
    emits("userAdd", 10)
}
    
</script>

<template>

<h3>Header</h3>

<h4>propsName: {{ props.propsName }}</h4>
<h4>propsUrl: {{ props.propsUrl }}</h4>
<h4>propsCount: {{ props.propsCount }}</h4>
<h4><Button @click="add">添加用户</Button></h4>
<hr>
</template>

<style scoped>

</style>