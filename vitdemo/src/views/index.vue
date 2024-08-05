<script setup>
// 编程式导航
import { useRouter } from 'vue-router';

const router = useRouter()

const goTo =() => {
    // push的参数就是下面router-link里to的内容
    router.push({path:'/content', query:{id:200,title:'vue3'}})
}
</script>

<template>
<H3>Index</H3>
<a href="https://www.dengruicode.com/classes?uuid=5e2b8bb70d374e2b8a66f4b2c6e241dc">https://www.dengruicode.com/classes?uuid=5e2b8bb70d374e2b8a66f4b2c6e241dc</a>

<br>
<router-link to="/cont">内容页</router-link> <br>

<router-link :to="{path:'/content', query:{id:200,title:'vue3'}}">查询字符串传参 - 动态绑定</router-link>
<router-link :to="{name:"member", params:{id:200, title:'vue'}}">路径传参 - 动态属性绑定</router-link>

<button @click="goTo()">编程式导航</button>
</template>

<style scoped>

</style>