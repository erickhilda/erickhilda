<script setup lang="ts">
import ProjectTab from '@/components/projects/project-tab.vue'
import WorkExperinceTab from '@/components/projects/work-experince-tab.vue'
import { portfolios } from '@/data/portfolio'
import { useHead } from '@unhead/vue'
import { useUrlSearchParams } from '@vueuse/core'
import { TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
import { computed } from 'vue'

// Component name for linting
defineOptions({
  name: 'ProjectsIndex',
})

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
  get: () => (params.tab || 'project') as string,
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
          class="absolute border border-outer-space px-8 left-0 h-0.5 bottom-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) translate-y-[1px] rounded-full transition-all duration-500 ease-out"
        >
          <div class="bg-outer-space dark:bg-gold w-full h-full rounded-full" />
        </TabsIndicator>
        <TabsTrigger
          v-for="t in ['project', 'work-experience']"
          :key="t"
          class="px-5 h-[45px] flex-1 flex items-center capitalize justify-center text-sm leading-none select-none data-[state=active]:font-bold outline-none cursor-default focus-visible:relative focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-black transition-all duration-200"
          :value="t"
        >
          {{ t.replace('-', ' ') }}
        </TabsTrigger>
      </TabsList>
    </TabsRoot>

    <div class="w-full relative overflow-hidden">
      <Transition name="tab-fade" mode="out-in" appear>
        <WorkExperinceTab
          v-if="activeTab === 'work-experience'"
          :key="'work-experience'"
          :experiences="portfolios['work-experience']"
        />
        <ProjectTab v-else :key="'project'" :projects="portfolios.project" />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.tab-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.tab-fade-enter-to,
.tab-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
