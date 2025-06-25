import { computed } from 'vue'
import { useColorMode } from '@vueuse/core'

export function useThemeTransition() {
  const theme = useColorMode()
  const isDark = computed(() => theme.value === 'dark')

  const setTheme = (mode: 'light' | 'dark') => (theme.value = mode)

  const toggleTheme = (buttonElement?: HTMLElement) => {
    const md = window.matchMedia('(max-width: 768px)').matches

    if (
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setTheme(isDark.value ? 'light' : 'dark')
      return
    }

    const transition = document.startViewTransition(() => {
      setTheme(isDark.value ? 'light' : 'dark')
    })

    transition.ready.then(() => {
      const blur = md ? 2 : 10
      const duration = md ? 500 : 700

      // Calculate button position for transition origin
      let clipPathStart = 'circle(0% at 50% 50%)'
      let clipPathEnd = 'circle(100% at 50% 50%)'

      if (buttonElement) {
        const rect = buttonElement.getBoundingClientRect()
        const centerX = ((rect.left + rect.width / 2) / window.innerWidth) * 100
        const centerY = ((rect.top + rect.height / 2) / window.innerHeight) * 100

        clipPathStart = `circle(0% at ${centerX}% ${centerY}%)`
        clipPathEnd = `circle(100% at ${centerX}% ${centerY}%)`
      }

      document.documentElement.animate(
        {
          clipPath: [clipPathStart, clipPathEnd],
          filter: [`blur(${blur}px)`, 'blur(0)'],
        },
        {
          duration,
          easing: 'ease-out',
          pseudoElement: '::view-transition-new(root)',
        },
      )
    })
  }

  return {
    theme,
    toggleTheme,
  }
}
