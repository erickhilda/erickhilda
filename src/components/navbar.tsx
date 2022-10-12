import { useTheme } from 'next-themes'

function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <nav className='p-6 flex flex-none h-full max-w-[930px] mx-auto'>
      <div className='flex-1' />
      <div className='flex items-center'>
        <nav className='inline-flex gap-4 dark:text-white items-center capitalize font-semibold'>
          <button
            className='p-2 focus:outline-none text-outer-space dark:text-gold'
            title='Toggles light & dark'
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {resolvedTheme === 'dark' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar
