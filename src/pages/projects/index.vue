<script setup lang="ts">
import ProjectTab from '@/components/projects/project-tab.vue'
import WorkExperinceTab from '@/components/projects/work-experince-tab.vue'
import { portfolios } from '@/data/portfolio'
import { useHead } from '@unhead/vue'
import { useUrlSearchParams } from '@vueuse/core'
import { TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
import { computed } from 'vue'

useHead({
  title: 'Portfolio | Erick Hilda',
  meta: [
    () => ({
      name: 'description',
      content:
        'Gallery to display result of my exploration of tools and idea. Also reflect my professional career journey and experience.',
    }),
  ],
})

const params = useUrlSearchParams()
const activeTab = computed({
  get: () => params.tab || 'project',
  set: (v) => (params.tab = v as string),
})
</script>

<template>
  <div class="flex flex-col items-start w-full gap-4 py-6">
    <h3 class="text-border text-shadow text-5xl font-semibold">Projects</h3>
    <p class="">
      This page contains the result of my exploration of tools and idea. Also some of my
      professional career journey and experience.
    </p>

    <TabsRoot class="flex flex-col w-full mb-4" default-value="project" v-model="activeTab">
      <TabsList class="relative flex shrink-0 border-b border-stone-300">
        <TabsIndicator
          class="absolute border border-outer-space px-8 left-0 h-0.5 bottom-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) translate-y-[1px] rounded-full transition-[width,transform] duration-300"
        >
          <div class="bg-outer-space dark:bg-gold w-full h-full" />
        </TabsIndicator>
        <TabsTrigger
          v-for="t in ['project', 'work-experience']"
          :key="t"
          class="px-5 h-[45px] flex-1 flex items-center capitalize justify-center text-sm leading-none select-none data-[state=active]:font-bold outline-none cursor-default focus-visible:relative focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-black"
          :value="t"
        >
          {{ t.replace('-', ' ') }}
        </TabsTrigger>
      </TabsList>
    </TabsRoot>

    <WorkExperinceTab
      v-if="activeTab === 'work-experience'"
      :experiences="portfolios['work-experience']"
    />
    <ProjectTab v-else :projects="portfolios.project" />
  </div>
</template>
