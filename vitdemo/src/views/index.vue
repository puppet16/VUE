<script setup>

</script>

<template>
<H3>Index</H3>
<a href="https://www.dengruicode.com/classes?uuid=5e2b8bb70d374e2b8a66f4b2c6e241dc">学习地址：https://www.dengruicode.com/classes?uuid=5e2b8bb70d374e2b8a66f4b2c6e241dc</a> <br>

<hr>
<br>
使用查询字符串传递数据，也就是在地址末尾加上? 后跟键值对 并以&分隔多个键值对，在目标页使用 $route.query.对应键名获取对应值 <br>

<a href="http://localhost:5173/content?id=100&title=puppet">查询字符串方式：http://localhost:5173/content?id=100&title=puppet</a>
<br>

使用路径传递数据，必须与定义的路径是一致的，参数也变为了路径的一部分，在目标页使用 $route.params.对应键名获取对应值 <br>
但是只要在定义规则的时候，给路径key名后加一个问号，就表示该参数非传 <br>
<a href="http://localhost:5173/user/9527">路径传递方式，只传id：http://localhost:5173/user/9527</a> <br>

<a href="http://localhost:5173/user/9527/puppet">路径传递方式都传递：http://localhost:5173/user/9527/puppet</a> <br>

<a href="http://localhost:5173/user/puppet">路径传递方式，只传必传的name：http://localhost:5173/user/puppet</a>

</template>

<style scoped>

</style>