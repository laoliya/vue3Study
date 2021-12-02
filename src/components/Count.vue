
<template>
    <div @click="add">
        {{count}}
    </div>
    <button @click="asyncAdd">asyncAdd</button>
</template>

<script setup>
import { computed } from 'vue'
// import { useStore } from '../store/gvuex' 手写mini-vuex
import { useStore } from 'vuex'
let store = useStore()
let count = computed(() => store.state.count)

let double = computed(() => store.getters.double)
console.log(double)
function add() {
    store.commit('add')
}
function asyncAdd() {
    store.dispatch('asyncAdd')
}
</script>