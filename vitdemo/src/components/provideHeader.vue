<script setup>
import Nav from './provideNav.vue'
import { inject } from 'vue';

const user = inject("provideUser")

</script>

<template>

<h3>Header.vue-Middle组件</h3>
<h3>user:{{ user }}</h3>
<Nav></Nav>
<hr>
</template>

<style scoped>

</style>