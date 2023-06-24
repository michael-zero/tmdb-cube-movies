import Layout from '../components/Layout'
import { MoviesProvider } from '../contexts/userMovies'
// import GlobalStyles from '../styles/global'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>    
     <Layout>
      <MoviesProvider>
        <Component {...pageProps} />
      </MoviesProvider>
    </Layout>
    {/* <GlobalStyles /> */}
  </>

}

export default MyApp
