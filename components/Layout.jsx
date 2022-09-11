import Meta from "./Meta"
import Header from '../components/Header'
import Footer from "./Footer"
import stylesLayout from '../styles/Layout.module.css'
import Script from "next/script"

const Layout = ({children}) => {
  return (
    <>
    <Meta />
    <Header />
    <div className={stylesLayout.bg}>
        <div className={stylesLayout.container}>
          {children}
        
        </div> 

    </div>
    <Footer />
    <Script id="resize-bg-onScroll"
    strategy="lazyOnload"
    dangerouslySetInnerHTML={{
      __html: `
        
      `
    }}   />
    </>
  )
}

export default Layout