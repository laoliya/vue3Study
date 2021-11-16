
<template>
    <h1>这是首页</h1>
    <TodoList />
    <button @click="handle">更改图标</button>
</template>

<script setup>
import TodoList from '../components/Todolist.vue'
import useFavicon from '../utils/useFavicon'
let {favicon} = useFavicon()
function handle() {
    favicon.value = './OnePiece(15).jpg'
    console.log(favicon)
 }
// import { reactive, computed, watchEffect } from 'vue'

//ref
// let getDouble = n=>n*2
// let _value = 1
// let double = getDouble(_value)
// let count = {
//     get value(){
//         return _value
//     },
//     set value(val){
//         _value = val
//         double = getDouble(_value)
//     }
// }
// console.log(count.value,double)
// count.value = 2
// console.log(count.value,double)

// let obj = reactive({
//     count: 1
// })
// let double = computed(()=>obj.count*2)
// obj.count = 2
// watchEffect(()=>{
//     console.log('数据被修改了',obj.count,double.value)
// })


// let getDouble = n=>n*2
// let obj = {
//     count:1
// }
// let double = getDouble(obj.count)
// let proxy = new Proxy(obj,{
//     get : function (target,prop) {
//         return target[prop]
//     },
//     set : function (target,prop,value) {
//         target[prop] = value;
//         if(prop==='count'){
//             double = getDouble(value)
//         }
//         return true
//     },
//     deleteProperty(target,prop){
//         delete target[prop]
//         if(prop==='count'){
//             double = NaN
//         }
//         return true
//     }
// })
// console.log(obj.count,double)
// proxy.count = 2
// console.log(obj.count,double) 
// proxy.count = 4
// console.log(obj.count,double) 
// delete proxy.count
// // // 删除属性后，我们打印log时，输出的结果就会是 undefined NaN
// console.log(obj.count,double) 
</script>