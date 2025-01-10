// 全局共享的用户状态
import { defineStore } from 'pinia'
import { ref,reactive } from 'vue'
// hooks 编程
export const useUserStore = defineStore('user',()=>{
     const isLogin = ref(false)
     const toLogin=()=>{
         isLogin.value=true
     }
     const toLogout=()=>{
         isLogin.value=false
     }
     const userInfo = reactive({
         name:'',
         avatar:'',
         message:'',
         uid:null
         
        })
        const setUserInfo=()=>{
            userInfo.name='张三'
            userInfo.avatar='https://juejin.cn/user/4422713894766395'
            userInfo.message='10'
            userInfo.uid=4422713894766395
        }
     return {
         isLogin,toLogin,toLogout,userInfo,setUserInfo
     }
 })