<script setup>
import { userWebStore } from '../stores/web';

const webStore = userWebStore()
console.log(webStore.web, webStore.count);
</script>

<template>
     <h3>Pinia官网：https://pinia.vuejs.org/zh/</h3>
     <h3>适用于Pinia的持久化存储插件官网：https://prazdevs.github.io/pinia-plugin-persistedstate/zh/</h3>
     使用pinia 插件进行持久化存储也是存在了localStorage里，与localStore对比：
     自动状态同步<br>
     持久化插件自动将Pinia的状态存储到localStorage中，无需手动处理状态的读取和写入<br>
     易用性<br>
     无需手动处理localStorage 的键值对存储、数据转换等繁琐过程<br>
     与Vue组件状态紧密集成<br>
     持久化插件与VUE组件的响应式数据完美结合
     当状态改变时，依赖这些状态的组件会自动更新视图
     与仅仅从localStorage中读取静态数据相张经理我灵活和强大
     <hr>
    {{ webStore.web }}

    {{ webStore.count }}
    <br>
    <Button @click="webStore.userAdd">添加数量</Button>

</template>

<style scoped></style>