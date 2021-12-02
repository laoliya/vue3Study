
<template>
    <div>这是关于页面</div>
    <h1 @click="toggle">click</h1>
    你的评分是 {{score}}
    <Rate v-model="score">
        山东山东
    </Rate>
    <!-- <Rate :value="score" :theme="'red'" />
    <Rate :value="score" :theme="'green'" /> -->
    <Count/>
</template>
<script setup>
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'
import Rate from '../components/Rate.vue'
import Count from '../components/Count.vue'
let score = ref(2)
function update(num){
    score.value = num

}
const { isFullscreen, enter, exit, toggle } = useFullscreen()
</script>