<script setup>
    /**
     * provide 用于父组件将数据或函数提供给所有子组件
     * inject 用于接收传递的数据或函数
     * 若使用了provide 和inject 来进行数据传递，
     * 则一般不需要再使用 defineProps
     */

    import { provide, reactive, ref } from 'vue';
    import Header from './provideHeader.vue';
    provide("provideWeb", {name:"Lee", url:"www.taobao.com"})


    const web = {
        name: "Le",
        url: "www.jd.com"
    }

    // 传递响应式数据
    const user = ref(0)
    // 第一个参数是注入的key名
    provide("provideUser", user)

    // 添加用户
    const userAdd = () => {
        user.value++
    }

    // 用于父组件将函数 提供给所有子组件
    provide("provideFuncUserAdd", userAdd)


</script>

<template>
<h3>App.vue-Top组件</h3>

user:{{ user }}

<h4><Button @click="userAdd">添加用户</Button></h4>

<!-- 子组件 -->
 <Header></Header>
</template>

<style scoped>

</style>