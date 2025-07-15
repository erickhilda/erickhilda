<script setup lang="ts">
import type { Portfolio } from '@/types/project'

const props = defineProps<{ experiences: Portfolio['work-experience'] }>()
</script>

<template>
  <div class="mx-auto max-w-3xl pl-2 lg:pl-0">
    <div class="relative border-l border-muted border-dashed pl-6 lg:pl-8">
      <div
        v-for="(exp, idx) in props.experiences"
        :key="`work-exp-${idx}`"
        :class="`mb-8 last:mb-0`"
      >
        <div
          class="absolute -left-4 -translate-y-0.5 h-8 w-8 border-4 border-white dark:border-(--outer-space) rounded-full"
        >
          <span
            class="flex items-center justify-center rounded-full backdrop-blur-lg w-full h-full border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          </span>
        </div>
        <h4 class="text-xl text-muted-foreground font-bold">{{ exp.company }}</h4>
        <div class="mb-3 text-sm font-light text-muted-foreground">
          <span class="font-semibold">{{ exp.position }}</span
          >, {{ exp.period }}
        </div>
        <p class="text-muted-foreground text-sm">{{ exp.description }}</p>
      </div>
    </div>
  </div>
</template>
