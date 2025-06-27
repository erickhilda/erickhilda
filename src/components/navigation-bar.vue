<script setup lang="ts">
import IconMoon from './icon-moon.vue'
import IconSun from './icon-sun.vue'
import { useThemeTransition } from '@/composable/use-theme-transition'
import { useRoute } from 'vue-router'

const { theme, toggleTheme } = useThemeTransition()
const route = useRoute()

const handleThemeToggle = (event: Event) => {
  const button = event.currentTarget as HTMLElement
  toggleTheme(button)
}

// Check if current route matches navigation items
const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const links = [
  // {
  //   path: '/posts',
  //   title: 'Posts',
  // },
  {
    path: '/projects',
    title: 'Projects',
  },
]
</script>

<template>
  <nav class="p-6 flex flex-none h-full w-full">
    <div class="flex-1 flex items-center justify-start">
      <RouterLink
        to="/"
        title="Main Page"
        class="relative transition-all duration-200"
        :class="{ 'opacity-100': isActive('/'), 'opacity-70 hover:opacity-100': !isActive('/') }"
      >
        <img src="/logo.svg" class="h-9 w-9" />
      </RouterLink>
    </div>
    <div class="flex items-center">
      <nav class="inline-flex gap-4 dark:text-white items-center capitalize font-semibold">
        <RouterLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          :title="link.title"
          class="relative transition-all duration-200"
          :class="{
            'text-outer-space dark:text-gold': isActive(link.path),
            'text-outer-space dark:text-white hover:text-outer-space dark:hover:text-white font-light':
              !isActive(link.path),
          }"
        >
          <span>{{ link.title }}</span>
        </RouterLink>

        <button
          class="p-2 focus:outline-none text-outer-space dark:text-white cursor-pointer"
          title="Toggles light & dark"
          @click="handleThemeToggle"
        >
          <IconMoon class="h-6 w-6" v-if="theme === 'light'" />
          <IconSun class="h-6 w-6" v-else />
        </button>
      </nav>
    </div>
  </nav>
</template>
