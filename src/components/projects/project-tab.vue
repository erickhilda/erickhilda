<script setup lang="ts">
import type { Portfolio } from '@/types'
import { RouterLink } from 'vue-router'

const props = defineProps<{ projects: Portfolio['project'] }>()
</script>

<template>
  <div class="grid grid-cols-6 lg:grid-cols-12 w-full gap-3">
    <div
      v-for="p in props.projects"
      :key="`card-${p.name}`"
      class="col-span-6 lg:col-span-4 rounded-lg backdrop-blur-sm border"
    >
      <img v-if="p.image" :src="p.image" class="aspect-video rounded-t-lg" />
      <div class="flex justify-between p-3">
        <div>
          <RouterLink :href="p.link" class="font-semibold">{{ p.name }}</RouterLink>
          <p class="font-light prose-sm line-clamp-2">{{ p.desc }}</p>
        </div>
        <RouterLink v-if="p.repo" :href="p.repo" class="aspect-square w-5 h-5 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-github-icon lucide-github"
          >
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
