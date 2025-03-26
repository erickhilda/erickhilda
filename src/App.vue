<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/navigation-bar.vue'
</script>

<template>
  <div class="container mx-auto min-h-screen">
    <NavigationBar />
    <div class="flex justify-center">
      <div class="dark:text-white text-outer-space px-6 lg:max-w-[930px]">
        <RouterView />
      </div>
    </div>
  </div>
</template>
