<template>
  <div class="about">
    <h1>This is an about SHUANQ</h1>
    <div>{{ counterStore.count }}</div>
    <div>{{ counterStore.doubleCount }}</div>
    <div>{{ counterStore.headCount }}</div>
    <el-button @click="faa">Default</el-button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
counterStore.$patch({ count: counterStore.count })
const faa = () => {
  counterStore.increment()
}
</script>

<style scoped lang="less"></style>
