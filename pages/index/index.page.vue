<template>
  <h1>Welcome</h1>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" m-b-5 v-for="i in 5" :key="i">
      <el-card>
        <el-skeleton :rows="5" />
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup></script>
