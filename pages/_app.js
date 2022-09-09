import Layout from '../components/Layout'
import {LangWrapper} from '../context/state'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return(
    <LangWrapper>
        <Layout>
        <Component {...pageProps} />
    </Layout>
      </LangWrapper>
  ) }

export default MyApp
