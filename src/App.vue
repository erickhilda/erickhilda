<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/navigation-bar.vue'
</script>

<template>
  <div class="container mx-auto min-h-screen">
    <NavigationBar />
    <div class="flex justify-center px-6 lg:w-[930px] mx-auto prose-outer-space prose-invert">
      <Transition name="page" mode="out-in" appear>
        <RouterView />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
