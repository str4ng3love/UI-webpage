import Meta from '../components/Meta'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/state'
import stylesHome from '../styles/Home.module.css'
import { getSession } from '../lib/get-session'
import NewPosts from '../components/NewPosts'

export default function Home(props) {
  
const {lang, user} = useContext(AppContext)
const {currentLang}  = lang
const {currentUser, setUser} = user



useEffect(()=>{
  setUser(props.user)
}, [])

  return (
  <>
  <div className={stylesHome.container}>
  {currentLang===`PL`?
    <>

      <Meta title='Useless Idea - Korporacja Eve Onlnie | Głowna'/>
      <div className={stylesHome.headings}>
        <h1 className={stylesHome.headingL}>Useless Idea</h1>
        <h3 className={stylesHome.headingS}>Polska Korporacja Eve Online</h3>
      </div>
    </> 
  :
    <>
      <Meta title='Useless Idea - EVE ONLINE Corporation | Home' desc='Homepage of Useless Idea, an Eve Online Corporation' keywords='Eve online, Useless Idea, poland, polish corporation, Discord, pochven, PVP, begginer'/> 
      <div className={stylesHome.headings}>
        <h1 className={stylesHome.headingL}>Useless Idea</h1>
        <h3 className={stylesHome.headingS}>Polish Eve Online Corporation</h3>
      </div>
    </>
  } 

    <div className={stylesHome.mainContainer}>
        <div className={stylesHome.dummy} >
        </div>
      
    </div>
  </div>
    <div className={stylesHome.shading}></div>

    <NewPosts />

  </>
  )
  
}

export async function getServerSideProps({req, res}) {
  const session = await getSession(req, res)


  if(session.charName){
    let charId = session.charId
    let charName = session.charName
    let tokenExp = session.tokenExp
    return { 
      props: { 
        user: {
          charId, charName, tokenExp
        }
       }
    }
  } else {
    return  {
      props: {
        
      }
    }
  }
}