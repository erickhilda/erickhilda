import { computed } from 'vue'
import { useColorMode } from '@vueuse/core'

export function useThemeTransition() {
  const theme = useColorMode()
  const isDark = computed(() => theme.value === 'dark')

  const setTheme = (mode: 'light' | 'dark') => (theme.value = mode)

  const toggleTheme = () => {
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

      document.documentElement.animate(
        {
          clipPath: ['circle(50% at -100% 50%)', 'circle(100% at 50% 50%)'],
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
