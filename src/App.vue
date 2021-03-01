<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: '👋 Hi i`m Erick',
  meta: [
    { name: 'description', content: 'Personal blog by Erick Hilda Andreas' },
  ],
})
</script>

<template>
  <router-view />
</template>
