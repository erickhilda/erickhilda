import Head from 'next/head'
import clsx from 'clsx'

import IntorBanner from 'components/home/intro-banner'

import type { NextPage } from 'next'
import WorkingJourney from 'components/home/working-journey'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Erick Hilda Personal Blog</title>
        <meta name='description' content='Erick Hilda Personal Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='h-full'>
        <IntorBanner />

        <div className='flex justify-center mt-16'>
          <div className='grid grid-cols-1 lg:grid-cols-6 gap-4 lg:max-w-[930px]'>
            {/* <div className='border lg:col-span-3 lg:row-span-6'></div> */}

            <WorkingJourney />

            <div
              className={clsx(
                'lg:col-span-3 lg:col-start-4 lg:row-span-3',
                'backdrop-blur-sm p-4 rounded-lg',
                'ring-1 shadow-md ring-outer-space/30 shadow-outer-space/10 dark:ring-gold/30 dark:shadow-gold/10'
              )}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate earum molestiae modi dignissimos officiis?
              Necessitatibus debitis nobis aut quis neque odit! Odio quo, nulla
              nemo veniam quam deserunt nobis repellendus!
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
