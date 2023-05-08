<script lang="ts" setup>
import { ref } from 'vue'
import { usePageContext } from './usePageContext'
const pageContext = usePageContext()
const activeLink = ref(pageContext.urlPathname)
const goto = (index: string) => {
  index.startsWith('/') && window.location.pathname !== index && window.location.replace(index)
}
</script>

<template>
  <el-container h-screen>
    <el-header class="header">
      <el-col>
        <el-space spacer="·">
          <img src="./logo.svg" h-12 w-12 alt="logo" />
          <el-icon size="50"><i-logos-vitejs /></el-icon>
          <el-icon size="50"><i-logos-vue /></el-icon>
          <el-icon size="50"><i-logos-typescript-icon /></el-icon>
          <el-icon size="50"><i-logos-unocss /></el-icon>
        </el-space>
      </el-col>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu :default-active="activeLink" @select="goto" h="100%">
          <el-menu-item index="/">
            <el-icon><i-fluent-emoji-house /></el-icon>
            <span>Home</span>
          </el-menu-item>
          <el-menu-item index="/system-info">
            <el-icon><i-fluent-emoji-information /></el-icon>
            <span>System Info</span>
          </el-menu-item>
          <el-menu-item index="/about">
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
