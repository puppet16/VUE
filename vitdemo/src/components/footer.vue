<script setup>
    const props = defineProps({
        count: Number,
        url: String,
        // 对属性做一些限定
        user: {
            // 类型为 String
            type: String,
            // 设置为必传，设置为必传但是没传的话会在控制台报错
            required: true,
            // 设置默认参数
            default:"Lee"
        }
    })
    console.log(props);
</script>

<template>
    <hr>
<h3>Footer</h3>
<h4>count:{{ props.count }}</h4>
<h4>url:{{ props.url }}</h4>
<h4>user:{{ props.user }}</h4>
</template>

<style scoped>

</style>