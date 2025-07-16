<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { formatDate, formatDuration } from '@/lib/date'
import type { PostMeta } from '@/types/post'

const route = useRoute()
const frontmatter = computed(() => route.meta.frontmatter as unknown as PostMeta)

// Set up head meta tags
useHead({
  title: () => frontmatter.value.title,
  meta: [
    {
      name: 'description',
      content: () => frontmatter.value.desc || 'Blog post by Erick Hilda'
    },
    {
      property: 'og:title',
      content: () => frontmatter.value.title
    },
    {
      property: 'og:description',
      content: () => frontmatter.value.desc || 'Blog post by Erick Hilda'
    },
    {
      property: 'og:image',
      content: () => frontmatter.value.image || '/logo.svg'
    }
  ]
})
</script>

<template>
  <article class="lg:max-w-4xl w-full my-6">
    <!-- Post Header -->
    <header class="text-center mb-8">
      <h1 class="text-2xl md:text-4xl font-bold text-outer-space dark:text-white mb-6 leading-tight">
        {{ frontmatter.title }}
      </h1>
      
      <!-- Author Information -->
      <div class="flex items-center justify-center gap-3 lg:text-sm text-xs text-muted-foreground">
        <img 
          src="/logo.svg" 
          alt="Erick Hilda" 
          class="lg:w-8 lg:h-8 w-6 h-6 rounded-full"
        />
        <span>By {{ frontmatter.author || 'Erick Hilda' }}</span>
        <span class="hidden sm:inline">•</span>
        <span>{{ formatDate(frontmatter.date) }}</span>
        <span v-if="frontmatter.duration" class="hidden sm:inline">•</span>
        <span v-if="frontmatter.duration">{{ formatDuration(+frontmatter.duration) }}</span>
      </div>
    </header>

    <!-- Post Content -->
    <div class="prose prose-lg max-w-none mx-auto">
      <img
        v-if="frontmatter.image"
        :src="frontmatter.image"
        :alt="frontmatter.title"
        class="w-full rounded-lg"
      />
      
      <slot />
    </div>

    <!-- Post Footer -->
    <footer class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div class="flex items-center gap-3">
          <img 
            src="/logo.svg" 
            alt="Erick Hilda" 
            class="w-10 h-10 rounded-full"
          />
          <div>
            <div class="font-semibold text-outer-space dark:text-white">
              {{ frontmatter.author || 'Erick Hilda' }}
            </div>
            <div class="text-sm text-muted-foreground">
              Software Engineer
            </div>
          </div>
        </div>
        
        <div class="flex gap-4">
          <a 
            href="https://twitter.com/erickhlda" 
            target="_blank"
            class="text-muted-foreground hover:text-outer-space dark:hover:text-white transition-colors"
          >
            Twitter
          </a>
          <a 
            href="https://github.com/erickhilda" 
            target="_blank"
            class="text-muted-foreground hover:text-outer-space dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/erickhilda/" 
            target="_blank"
            class="text-muted-foreground hover:text-outer-space dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  </article>
</template>

<style scoped>
.text-muted-foreground {
  color: #6b7280;
}

.dark .text-muted-foreground {
  color: #9ca3af;
}

.prose {
  color: var(--outer-space);
  line-height: 1.7;
}

.dark .prose {
  color: #fff;
}

.prose h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--outer-space);
}

.dark .prose h1 {
  color: #fff;
}

.prose h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--outer-space);
}

.dark .prose h2 {
  color: #fff;
}

.prose h3 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--outer-space);
}

.dark .prose h3 {
  color: #fff;
}

.prose p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
}

.prose a {
  color: var(--outer-space);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
}

.dark .prose a {
  color: var(--gold);
}

.prose a:hover {
  color: var(--gold);
}

.dark .prose a:hover {
  color: #fff;
}

.prose img {
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  margin: 2rem 0;
}

.prose blockquote {
  border-left: 4px solid var(--gold);
  padding-left: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: var(--outer-space);
}

.dark .prose blockquote {
  color: #e5e5e5;
}

.prose ul, .prose ol {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose strong {
  font-weight: 600;
  color: var(--outer-space);
}

.dark .prose strong {
  color: #fff;
}

.prose code {
  background: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
  color: var(--outer-space);
}

.dark .prose code {
  background: #2a2a2a;
  color: #e5e5e5;
}

/* Responsive typography */
@media (max-width: 768px) {
  .prose h1 {
    font-size: 2rem;
  }
  
  .prose h2 {
    font-size: 1.5rem;
  }
  
  .prose p {
    font-size: 1rem;
  }
}
</style> 