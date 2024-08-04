<script setup>
// import FatherToChildrenData from './components/fatherToChildrenData.vue';
import ChildrenToFatherData from './components/03childrenToFatherData.vue';
import DependencyInjection from './components/05dependencyInjection.vue';
import SlotDemo from './components/06slot.vue'
import LifecycleFun from './components/07lifecycleFun.vue'
import ToRefsDemo from './components/08toRefs.vue'
import PiniaDemo from './components/09PiniaDemo.vue'

import VueRouter4 from './components/10VueRouter4.vue'


</script>

<template>
    <!-- 父传子 属性 -->
<!-- <FatherToChildrenData></FatherToChildrenData> -->

 <!-- 子传父 事件 -->
<!-- <ChildrenToFatherData></ChildrenToFatherData> -->

<!-- 使用 provide 和 inject 依赖注入方式 父传所有子组件 -->
<!-- <DependencyInjection></DependencyInjection> -->

<!-- 匿名插槽和具名插槽
 <SlotDemo></SlotDemo> -->

 <!-- 生命周期函数 -->
<!-- <LifecycleFun></LifecycleFun> -->

<!-- toRef toRefs -->
<!-- <ToRefsDemo></ToRefsDemo> -->

<!-- pinia store -->
<!-- <PiniaDemo></PiniaDemo> -->

<VueRouter4></VueRouter4>
</template>

<style scoped>

</style>