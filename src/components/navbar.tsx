import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <nav className='p-6 flex flex-none h-full max-w-[930px] mx-auto'>
      <div className='flex-1' />
      <div className='flex items-center'>
        <nav className='inline-flex gap-4 dark:text-white items-center capitalize font-semibold'>
          <button
            className='p-2 focus:outline-none text-outer-space dark:text-white'
            title='Toggles light & dark'
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {resolvedTheme === 'dark' ? (
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
