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
      </main>
    </>
  )
}

export default Home
