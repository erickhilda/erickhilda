<script setup lang="ts">
import IconMoon from './icon-moon.vue'
import IconSun from './icon-sun.vue'
import { useThemeTransition } from '@/composable/use-theme-transition'

const { theme, toggleTheme } = useThemeTransition()
</script>

<template>
  <nav class="p-6 flex flex-none h-full w-full">
    <div class="flex-1 flex items-center justify-start">
      <RouterLink to="/" title="Main Page">
        <img src="/logo.svg" class="h-9 w-9" />
      </RouterLink>
    </div>
    <div class="flex items-center">
      <nav class="inline-flex gap-4 dark:text-white items-center capitalize font-semibold">
        <!-- <RouterLink to="/posts" title="Blog" class="link"> -->
        <!--   <span>Blog</span> -->
        <!-- </RouterLink> -->
        <RouterLink to="/projects" title="Projects">
          <span>Projects</span>
        </RouterLink>
        <button
          class="p-2 focus:outline-none text-outer-space dark:text-white cursor-pointer"
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
