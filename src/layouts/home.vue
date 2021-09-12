<script setup>
import { toggleDark, isDark } from '~/logics'
</script>

<template>
  <main>
    <header class="py-6">
      <div class="flex flex-none h-full">
        <div class="flex flex-1 items-center">
          <a href="/" class="dark:text-white font-bold">
            Erick Hilda
          </a>
        </div>
        <div class="hidden lg:flex items-center">
          <nav class="inline-flex space-x-2 dark:text-white items-center capitalize font-semibold">
            <a href="/portofolio" class="p-2">portofolio</a>
            <a href="/me" class="p-2">about me</a>
            <a href="/blog" class="p-2">blog</a>
            <button class="mx-2 !outline-none p-2" @click="toggleDark()">
              <carbon-asleep-filled v-if="isDark" />
              <carbon-awake v-else />
            </button>
          </nav>
        </div>
      </div>
    </header>
    <router-view />
  </main>
</template>
