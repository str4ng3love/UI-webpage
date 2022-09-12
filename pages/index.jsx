import Meta from '../components/Meta'
import { useContext } from 'react'
import { LangContext } from '../context/state'

import stylesHome from '../styles/Home.module.css'

export default function Home() {
  const {lang} = useContext(LangContext)
  return (
  <>
  <div className={stylesHome.landing}>
  
  </div>
  {lang===`PL`?
    <>
   
      <Meta title='Useless Idea - Korporacja Eve Onlnie | Głowna'/>
      <div className={stylesHome.headings} >
        <h1 className={stylesHome.headingL}> Useless Idea</h1>
        <h3 className={stylesHome.headingS} >Polska Korporacja Eve Online</h3>
      </div>
    </> 
  :
    <>
      <Meta title='Useless Idea - EVE ONLINE Corporation | Home' desc='Homepage of Useless Idea, an Eve Online Corporation' keywords='Eve online, Useless Idea, poland, polish corporation, Discord, pochven, PVP, begginer'/> 
      <div className={stylesHome.headings}>
        <h1 className={stylesHome.headingL}>Useless Idea</h1>
        <h3 className={stylesHome.headingS} >Polish Eve Online Corporation</h3>
      </div>
    </>
  }
  </>
  )
}
