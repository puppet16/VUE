<script setup>
 import Header from './header.vue';
 import Footer from './footer.vue';
// 添加响应式数据
 import { reactive } from 'vue';

 const propsWeb = {
    count:10,
    url: "www.google.com"
 }

 // 定义的响应式数据
 const propsWebReactive = reactive({
    count:10,
    url: "www.google.com"
 })

 const countAdd= () => {
    propsWebReactive.count++
    console.log(propsWebReactive.count);
 }

</script>

<template>

<!-- 父传子的属性 一般类型 -->
<Header propsName="puppet" propsUrl="www.baidu.com"></Header>

www.baidu.com

<button @click="countAdd">添加用户</button>

<!-- 父传子属性 对象 使用 v-bind 简写：-->
<!-- <Footer :="propsWeb"/> -->
<Footer :="propsWebReactive"/>

</template>

<style scoped>

</style>