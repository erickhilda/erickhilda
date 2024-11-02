import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useThemeTransition } from 'lib/use-theme-transition'

function Navbar() {
  const { toggleTheme, theme } = useThemeTransition()

  return (
    <nav className='p-6 flex flex-none h-full max-w-[930px] mx-auto'>
      <div className='flex-1' />
      <div className='flex items-center'>
        <nav className='inline-flex gap-4 dark:text-white items-center capitalize font-semibold'>
          <button
            className='p-2 focus:outline-none text-outer-space dark:text-white'
            title='Toggles light & dark'
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <MoonIcon className='h-6 w-6' />
            ) : (
              <SunIcon className='h-6 w-6' />
            )}
          </button>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar
