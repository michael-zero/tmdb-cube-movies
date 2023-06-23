import Layout from '../components/Layout'
import { MoviesProvider } from '../contexts/userMovies'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <MoviesProvider>
       <Component {...pageProps} />
    </MoviesProvider>
  </Layout>
}

export default MyApp
