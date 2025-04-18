<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/navigation-bar.vue'
</script>

<template>
  <div class="container mx-auto min-h-screen">
    <NavigationBar />
    <div class="flex justify-center px-6 lg:w-[930px] mx-auto prose-outer-space prose-invert">
      <RouterView />
    </div>
  </div>
</template>
