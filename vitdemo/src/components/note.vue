<script setup>
import { reactive } from "vue"
const data = reactive({
    content: "www.baidu.com",
    list: ["puppet", 18, "BeiJing"]
})

const add = () => {
    data.list.push(data.content)
    console.log(data.list);
}

const del = (index) => {
    // 删除函数，第一个参数是删除下标，第二个参数是删除数量
    data.list.splice(index, 1)
}

const clear = () => {
    data.list = []
}

</script>

<template>
    <!-- 记事本 数据的基本操作 -->
    <input type="text" v-model="data.content">
    <!-- 添加操作 -->
    <button @click="add">添加</button>

    <!-- 列表展示，与删除操作 -->
    <ul>
        <li v-for="(value, index) in data.list">
            {{ index }} {{ value }} <button @click="del(index)">删除</button>
        </li>
    </ul>

    <!-- 总数量 -->
    {{ data.list.length }} <button @click="clear">清空</button>

</template>

<style scoped></style>