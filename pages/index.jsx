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
      <h1 className={stylesHome.heading}>Witaj na stronie korporacji Useless Idea</h1>

    </> 
  :
    <>
      <Meta title='Useless Idea - EVE ONLINE Corporation | Home' desc='Homepage of Useless Idea, an Eve Online Corporation' keywords='Eve online, Useless Idea, poland, polish corporation, Discord, pochven, PVP, begginer'/> 
      <h1 className={stylesHome.heading}>Welcome to the Useless Idea Webpage</h1>
    </>
  }
  </>
  )
}
