import Layout from '../components/Layout'
import {AppWrapper} from '../context/state'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return(
    <AppWrapper>
        <Layout>
        <Component {...pageProps} />
    </Layout>
      </AppWrapper>
  ) }

export default MyApp
