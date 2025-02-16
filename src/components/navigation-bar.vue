<script setup lang="ts">
import IconMoon from './icon-moon.vue'
import IconSun from './icon-sun.vue'
import { useThemeTransition } from '@/composable/use-theme-transition'

const { theme, toggleTheme } = useThemeTransition()
</script>

<template>
  <nav class="p-6 flex flex-none h-full max-w-[930px] mx-auto">
    <div class="flex-1" />
    <div class="flex items-center">
      <nav class="inline-flex gap-4 dark:text-white items-center capitalize font-semibold">
        <button
          class="p-2 focus:outline-none text-outer-space dark:text-white"
          title="Toggles light & dark"
          @click="toggleTheme"
        >
          <IconMoon class="h-6 w-6" v-if="theme === 'light'" />
          <IconSun class="h-6 w-6" v-else />
        </button>
      </nav>
    </div>
  </nav>
</template>
