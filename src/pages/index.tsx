import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Head>
        <title>Erick Hilda Personal Blog</title>
        <meta name='description' content='Erick Hilda Personal Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='h-full'>
        <nav className='p-6 flex flex-none h-full'>
          <div className='flex-1' />
          <div className='flex items-center'>
            <nav className='inline-flex gap-4 dark:text-white items-center capitalize font-semibold'>
              <button
                className='p-2 focus:outline-none'
                title='Toggles light & dark'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
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
        <div className='dark:text-white mt-15 flex flex-col justify-start items-center'>
          <div className='w-2/3'>
            <h3 className='text-4xl lg:text-6xl mt-[8vw] font-extrabold'>
              Hello... 👋 <br />I am Erick Hilda.
            </h3>
            <p className='lg:text-lg font-semibold mt-4 max-w-screen-md'>
              I am a software engineer base on Indonesia. I am enthusiastic in
              web development and everything in its orbit.
            </p>
            <p className='lg:text-lg font-semibold max-w-[20em] mt-4'>
              Outside of programming and stuff, I enjoy video games and One
              Piece.
            </p>
            <p className='lg:text-lg font-semibold max-w-[20em] mt-4'>
              You can find me on{' '}
              <Link href='https://github.com/erickhilda'>
                <a className='underline hover:text-blue-500'>Github</a>
              </Link>{' '}
              or{' '}
              <Link href='https://twitter.com/hiii_erick'>
                <a className='underline hover:text-blue-500'>Twitter</a>
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
