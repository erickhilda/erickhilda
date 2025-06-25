<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export interface Post {
  path: string
  title: string
  date: string
  lang?: string
  desc?: string
  duration?: string
}

const props = defineProps<{
  type: string
  posts?: Post[]
  extra?: Post[]
}>()

const router = useRouter()
const routes: Post[] = router
  .getRoutes()
  .filter(
    (i) => i.path.startsWith('/posts') && i.meta.frontmatter.date && !i.meta.frontmatter.draft,
  )
  .filter(
    (i) =>
      !i.path.endsWith('.html') &&
      ((i.meta.frontmatter.type as string) || 'blog').split('+').includes(props.type),
  )
  .map(
    (i) =>
      ({
        path: i.meta.frontmatter.redirect || i.path,
        title: i.meta.frontmatter.title,
        date: i.meta.frontmatter.date,
        lang: i.meta.frontmatter.lang,
        desc:
          i.meta.frontmatter.desc ||
          (i.meta.frontmatter.meta && i.meta.frontmatter.meta[0]?.content),
        duration: i.meta.frontmatter.duration,
      }) as Post,
  )

const posts = computed(() =>
  [...(props.posts || routes), ...(props.extra || [])].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  ),
)
</script>

<template>
  <div class="flex flex-col items-start w-full gap-4 py-6">
    <span class="text-border text-shadow text-5xl font-semibold">Posts</span>
    <div class="">
      In the spirit of improving my ability in writing, story telling, and explaining things
    </div>

    <div class="relative border-l border-muted border-dashed pl-4 lg:pl-6">
      <div v-for="post in posts" :key="post.path" :class="`mb-8 last:mb-0`">
        <div
          class="absolute -left-1.5 translate-y-2 h-3 w-3 border-1 border-white dark:border-(--outer-space) rounded-full"
        >
          <span
            class="flex items-center justify-center rounded-full backdrop-blur-lg w-full h-full border"
          >
          </span>
        </div>
        <div class="flex flex-col items-start">
          <RouterLink :to="post.path" class="text-xl text-muted-foreground font-bold">
            {{ post.title }}
          </RouterLink>
          <span class="text-sm font-light text-muted-foreground mt-1">
            {{
              new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })
            }}
          </span>
        </div>
        <span class="text-foreground text-sm mt-2">{{ post.desc }}</span>
      </div>
    </div>
  </div>
</template>
