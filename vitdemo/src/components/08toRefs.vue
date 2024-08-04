<script setup>
    import { reactive, toRef, toRefs, ref } from 'vue';

    let web = reactive({
        name:"puppet",
        url: "www.baidu.com"
    })

    // toRefs 将一个对象解构成很多变量
    let {name, url} = toRefs(web)

    // toRef 将一个响应式对象里的某个属性转为 ref 变量
    // 第一个参数是响应式对象名，第二个参数是对象里的变量名
    // let url = toRef(web, "url")

    console.log(typeof url);


</script>

<template>

<h3>toRefs 将一个响应式对象的所有属性转换为 ref 对象</h3>
<h3>toRef 将一个响应式对象的某个属性转换为 ref 变量</h3>

    {{ url }}

</template>

<style scoped>

</style>