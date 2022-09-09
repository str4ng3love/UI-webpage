import Meta from "./Meta"
import Header from '../components/Header'
import stylesLayout from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
    <Meta />
    <Header />
      <div className={stylesLayout.container}>
        {children}
      </div> 
    
    </>
  )
}

export default Layout