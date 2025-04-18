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
console.log(router.getRoutes().filter((i) => i.path.startsWith('/posts')))
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
        duration: i.meta.frontmatter.duration,
      }) as Post,
  )

const posts = computed(() =>
  [...(props.posts || routes), ...(props.extra || [])].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  ),
)

const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isFuture = (a?: Date | string | number) => a && new Date(a) > new Date()
const isSameYear = (a?: Date | string | number, b?: Date | string | number) =>
  a && b && getYear(a) === getYear(b)
function isSameGroup(a: Post, b?: Post) {
  return isFuture(a.date) === isFuture(b?.date) && isSameYear(a.date, b?.date)
}

function getGroupName(p: Post) {
  if (isFuture(p.date)) return 'Upcoming'
  return getYear(p.date)
}
</script>

<template>
  <div class="debug !w-full lg:min-w-sm">
    List of post
    <ul>
      <template v-if="!posts.length">
        <div py2 op50>nothing here yet</div>
      </template>

      <template v-for="(route, idx) in posts" :key="route.path">
        <div
          v-if="!isSameGroup(route, posts[idx - 1])"
          select-none
          relative
          h20
          pointer-events-none
          slide-enter
          :style="{
            '--enter-stage': idx - 2,
            '--enter-step': '60ms',
          }"
        >
          <span
            text-8em
            color-transparent
            absolute
            left--3rem
            top--2rem
            font-bold
            text-stroke-2
            text-stroke-hex-aaa
            op10
            >{{ getGroupName(route) }}</span
          >
        </div>
        <div
          class="slide-enter"
          :style="{
            '--enter-stage': idx,
            '--enter-step': '60ms',
          }"
        >
          <component
            :is="route.path.includes('://') ? 'a' : 'RouterLink'"
            v-bind="
              route.path.includes('://')
                ? {
                    href: route.path,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : {
                    to: route.path,
                  }
            "
            class="item block font-normal mb-6 mt-2 no-underline"
          >
            <li class="no-underline" flex="~ col md:row gap-2 md:items-center">
              <div class="title text-lg leading-1.2em" flex="~ gap-2 wrap">
                <span align-middle>{{ route.title }}</span>

                <span text-sm op50 ws-nowrap>
                  <!-- {{ formatDate(route.date, true) }} -->
                  {{ route.date }}
                </span>
                <span v-if="route.duration" text-sm op40 ws-nowrap>· {{ route.duration }}</span>
                <span
                  v-if="route.lang === 'zh'"
                  align-middle
                  flex-none
                  class="text-xs bg-zinc:15 text-zinc5 rounded px-1 py-0.5 my-auto md:hidden"
                  >中文</span
                >
              </div>
            </li>
          </component>
        </div>
      </template>
    </ul>
  </div>
</template>
