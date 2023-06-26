
<template>
  <n-config-provider :theme="darkTheme">
    <router-view></router-view>
  </n-config-provider>
</template>
<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';
import { darkTheme } from 'naive-ui'
</script>
<style scoped>
</style>
