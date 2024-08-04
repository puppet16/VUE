<script setup>
import {reactive, ref} from 'vue'
import Header from './header.vue'

const web = reactive({
    name:"puppet",
    url:"www.baidu.com"
})

const count = ref(0)

const emitsGetWeb = (data) => {
    console.log("打印从子元素传递来的事件参数", data);
    web.url = data.url
}

const emitUserAdd = (data) => {
    console.log("从子元素传递过来的数量", data)
    count.value += data
}

</script>

<template>
    <!-- 使用@ 获取自定义的事件 -->
    <Header :propsCount="count" @getWeb="emitsGetWeb" @userAdd="emitUserAdd"></Header>

    {{ web.url }} - {{ count }}
</template>

<style scoped>

</style>