import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Erick Hilda Personal Blog</title>
        <meta name='description' content='Erick Hilda Personal Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='h-full'>
        <nav className='p-6'>
          <div className='flex flex-none h-full'>
            <div className='flex flex-1 items-center'>
              <Link href='/'>
                <a className='dark:text-white font-bold'>Erick Hilda</a>
              </Link>
            </div>
            <div className='hidden lg:flex items-center'>
              <nav className='inline-flex gap-4 dark:text-white items-center capitalize font-semibold'>
                <a href='/portofolio' className='py-2'>
                  portofolio
                </a>
                <a href='/me' className='py-2'>
                  about me
                </a>
                <a href='/blog' className='py-2'>
                  blog
                </a>
              </nav>
            </div>
          </div>
        </nav>
        <div className='dark:text-white mt-15 flex flex-col justify-start'>
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
              </Link>
              {' '}or{' '}
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
