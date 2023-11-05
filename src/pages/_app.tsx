import { ThemeProvider } from 'next-themes'
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from 'components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
