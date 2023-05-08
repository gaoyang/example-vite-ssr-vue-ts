<template>
  <h1>System Information</h1>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card header="OS">
        <el-descriptions :column="1">
          <el-descriptions-item label="Hostname">{{ osInfo.hostname }}</el-descriptions-item>
          <el-descriptions-item label="CPU cores">{{ osInfo.cpuCount }}</el-descriptions-item>
          <el-descriptions-item label="Total memory">{{ formatBytes(osInfo.totalMemory) }}</el-descriptions-item>
          <el-descriptions-item label="Free memory">{{ formatBytes(osInfo.freeMemory) }}</el-descriptions-item>
          <el-descriptions-item label="OS type">{{ osInfo.osType }}</el-descriptions-item>
          <el-descriptions-item label="OS platform">{{ osInfo.osPlatform }}</el-descriptions-item>
          <el-descriptions-item label="OS release">{{ osInfo.osRelease }}</el-descriptions-item>
        </el-descriptions>
      </el-card>
    </el-col>

    <el-col :span="6">
      <el-card header="User">
        <el-descriptions :column="1">
          <el-descriptions-item label="Username">{{ userInfo.username }}</el-descriptions-item>
          <el-descriptions-item label="Home directory">{{ userInfo.homedir }}</el-descriptions-item>
          <el-descriptions-item label="Shell">{{ userInfo.shell }}</el-descriptions-item>
        </el-descriptions>
      </el-card>
    </el-col>

    <el-col :span="6">
      <el-card header="Node">
        <el-descriptions :column="1">
          <el-descriptions-item label="Version">{{ nodeInfo.version }}</el-descriptions-item>
          <el-descriptions-item label="Architecture">{{ nodeInfo.arch }}</el-descriptions-item>
        </el-descriptions>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
defineProps(['userInfo', 'osInfo', 'nodeInfo'])

function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
</script>
