import { useTheme } from "next-themes"
import { useCallback } from "react"
import { flushSync } from "react-dom"

export function useThemeTransition() {
  const { setTheme, theme } = useTheme()
  const isDark = theme === 'dark'

  const toggleTheme = useCallback(() => {
    const md = window.matchMedia('(max-width: 768px)').matches

    if (
      // @ts-ignore
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setTheme(isDark ? 'light' : 'dark')
      return
    }
    // @ts-ignore
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDark ? 'light' : 'dark')
      })
    })

    transition.ready.then(() => {
      const blur = md ? 2 : 10
      const duration = md ? 500 : 700

      document.documentElement.animate(
        {
          clipPath: [`circle(50% at -100% 50%)`, `circle(100% at 50% 50%)`],
          filter: [`blur(${blur}px)`, `blur(0)`],
        },
        {
          duration,
          easing: 'ease-out',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
  }, [setTheme, isDark])

  return {
    theme,
    toggleTheme,
  }
}
