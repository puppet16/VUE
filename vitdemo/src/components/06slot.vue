<script setup>
import Header from './slotHeader.vue'
import Footer from './slotFooter.vue'
</script>

<template>

    <h3>插槽(slat) 是指可以在父组件内自定义模板片段，\n 在子组件中可以将定义的模板片段插入到子组件的特定位置</h3>
    <h3>作用域插槽是 在子组件以插槽的形式向父组件传递数据</h3>
    <h3>App.vue</h3>

    <Header>
        <!-- 匿名插槽 自定义代码片段 -->
        <a href="www.baidu.com">百度</a>
    </Header>


    <hr>
    <Footer>
        <!-- 具名插槽 自定义代码片段，必须用 template -->
        <!-- <template v-slot:url> -->
        <!-- v-slot: 可以简写成# -->

        <!-- 这个data就是子组件插槽传递回来的数据 -->
        <!-- <template #url="data">
            <a href="www.taobao.com">淘宝</a>
            <h4>{{ data.title }}: {{ data.desc }}</h4>
         </template> -->

        <!-- 还可以对data进行解构 -->

        <template #url="{ title, desc }">

            <a href="www.taobao.com">淘宝</a>
            <h4>{{ title }}: {{ desc }}</h4>
        </template>
    </Footer>



</template>

<style scoped></style>