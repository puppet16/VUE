import { reactive, ref } from "vue";
import { defineStore } from "pinia";
// 创建仓库,第一个参数是唯一标识，第二个参数这里使用的是vue里的setup函数
export const userWebStore = defineStore("web", ()=> {
    const web = reactive({
        title: "puppet",
        url: "www.baidu.com"  
    })

    const count = ref(100)
    const userAdd = () => {
        count.value++
    }

    return {web,
        count,
        userAdd
    }
},
{// 用于持久化存储
    persist: true
})