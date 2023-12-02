import Link from "next/link"

function IntorBanner() {
  return (
    <div className='flex justify-center'>
      <div className='dark:text-gold text-outer-space px-6 lg:grid lg:grid-cols-3 lg:max-w-[930px]'>
        <div className='lg:col-span-2'>
          <h2 className='md:text-[112px] leading-none text-[56px] mt-4 font-semibold'>
            Software Engineer based in East Java, Indonesia.
          </h2>
        </div>
        <div className='flex flex-col lg:justify-end lg:items-end'>
          <h3 className='leading-none mt-4 font-semibold'>
            Erick Hilda Andreas
          </h3>
          <div className='my-3 flex md:flex-row flex-col'>
            <Link href='https://www.linkedin.com/in/erickhilda/'>
              <a>Linkedin</a>
            </Link>
            <span className='mx-2 hidden md:block'>•</span>
            <Link href='https://github.com/erickhilda'>
              <a>Github</a>
            </Link>
            <span className='mx-2 hidden md:block'>•</span>
            <Link href='https://twitter.com/hiii_erick'>
              <a>Twitter</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntorBanner
