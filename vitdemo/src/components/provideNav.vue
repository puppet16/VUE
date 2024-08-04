<script setup>
import { inject } from 'vue';

const web = inject("provideWeb")
console.log("获取注入的数据", web);

const funUserAdd = inject("provideFuncUserAdd")
</script>

<template>
    <h3>nav.vue-Bottom组件</h3>
    <h3>{{ web }}</h3>
    <h4><Button @click="funUserAdd">添加用户</Button></h4>

</template>

<style scoped></style>