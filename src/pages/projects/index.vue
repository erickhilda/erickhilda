<script setup lang="ts">
import ProjectTab from '@/components/projects/project-tab.vue'
import WorkingExperinceTab from '@/components/projects/working-experince-tab.vue'
import type { Portfolio } from '@/types'
import { useHead } from '@unhead/vue'
import { useUrlSearchParams } from '@vueuse/core'
import { TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
import { computed } from 'vue'

useHead({
  title: 'Erick Hilda | Portfolio',
})

const portfolios: Portfolio = {
  project: [
    {
      name: 'Unsur',
      desc: 'A periodic table of element',
      link: 'https://unsur.vercel.app',
      image: '/images/unsur-preview.gif',
      repo: 'https://github.com/erickhilda/unsur',
      tools: ['NextJs', 'Typescript', 'Three.Js', 'Tailwindcss', 'D3'],
    },
    {
      name: 'erickhilda.com',
      desc: 'A personal blog of my own, that also serve as my portfolio.',
      link: 'https://erickhilda.com',
      image: '/images/personal-blog-preview.png',
      repo: 'https://github.com/erickhilda/erickhilda',
      tools: ['Vue', 'Typescript', 'markdown', 'Tailwindcss'],
    },
    {
      name: 'Furniture Configurator',
      desc: 'My exploration on implementing some threeJS knowledge I learned.',
      link: 'https://honey-jar.vercel.app',
      image: '/images/furniture-configurator.gif',
      repo: 'https://github.com/erickhilda/furniture-configurator',
      tools: ['NextJs', 'Typescript', 'Three.Js', 'Tailwindcss'],
    },
  ],
  'working-experience': [
    {
      id: 1,
      company: 'Tech Innovations Inc.',
      position: 'Senior Frontend Developer',
      period: 'Jan 2022 - Present',
      description:
        'Leading the frontend development team in building modern web applications using React and Next.js. Implemented performance optimizations that improved load times by 40%.',
    },
    {
      id: 2,
      company: 'Digital Solutions Ltd.',
      position: 'Frontend Developer',
      period: 'Mar 2020 - Dec 2021',
      description:
        'Developed responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UI components.',
    },
    {
      id: 3,
      company: 'WebCraft Agency',
      position: 'Junior Web Developer',
      period: 'Jun 2018 - Feb 2020',
      description:
        'Built and maintained client websites using HTML, CSS, and JavaScript. Assisted in transitioning legacy projects to modern frameworks.',
    },
    {
      id: 4,
      company: 'CreativeTech Startup',
      position: 'Web Development Intern',
      period: 'Jan 2018 - May 2018',
      description:
        'Assisted in developing website features and fixing bugs. Learned modern web development practices and tools.',
    },
  ],
}

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
      This page contains the result of my exploration of tools and idea. Some also reflect my
      professional career journey and experience.
    </p>

    <TabsRoot class="flex flex-col w-full" default-value="project" v-model="activeTab">
      <TabsList class="relative flex shrink-0 border-b border-stone-300">
        <TabsIndicator
          class="absolute border border-outer-space px-8 left-0 h-0.5 bottom-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) translate-y-[1px] rounded-full transition-[width,transform] duration-300"
        >
          <div class="bg-outer-space dark:bg-gold w-full h-full" />
        </TabsIndicator>
        <TabsTrigger
          v-for="t in ['project', 'working-experience']"
          :key="t"
          class="px-5 h-[45px] flex-1 flex items-center capitalize justify-center text-sm leading-none select-none data-[state=active]:font-bold outline-none cursor-default focus-visible:relative focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-black"
          :value="t"
        >
          {{ t.replace('-', ' ') }}
        </TabsTrigger>
      </TabsList>
    </TabsRoot>

    <WorkingExperinceTab
      v-if="activeTab === 'working-experience'"
      :experiences="portfolios['working-experience']"
    />
    <ProjectTab v-else :projects="portfolios.project" />
  </div>
</template>
