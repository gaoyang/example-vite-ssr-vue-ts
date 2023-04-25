<template>
  <el-button type="button" @click="state.count++">Counter {{ state.count }}</el-button>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const state = reactive({ count: 0 })
</script>
