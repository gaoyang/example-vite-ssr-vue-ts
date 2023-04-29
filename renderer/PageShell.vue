<script lang="ts" setup>
const selectMenu = (index: string) => {
  window.location.replace(`/${index}`)
}
</script>

<template>
  <el-container>
    <el-header class="header">
      <el-col>
        <el-icon size="60"><i-vscode-icons-file-type-vite /></el-icon>
      </el-col>
    </el-header>
    <el-container>
      <el-aside>
        <el-scrollbar>
          <el-menu default-active="" router popper-effect="light" @select="selectMenu">
            <el-menu-item index="">
              <el-icon><i-fluent-emoji-house /></el-icon>
              <span>Home</span>
            </el-menu-item>
            <el-menu-item index="system-info">
              <el-icon><i-fluent-emoji-information /></el-icon>
              <span>System Info</span>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon><i-fluent-emoji-beaming-face-with-smiling-eyes /></el-icon>
              <span>About</span>
            </el-menu-item>
            <el-sub-menu index="4">
              <template #title>
                <el-icon><i-fluent-emoji-globe-showing-americas /></el-icon>
                <span>Navigator Other</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main><slot /></el-main>
    </el-container>
  </el-container>
</template>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
</style>

<style scoped>
.header {
  border-bottom: solid 1px var(--el-menu-border-color);
}
</style>
