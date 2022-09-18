import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { AppContext } from '../context/state'
import eveLogoBL from '../public/images/eve-sso-login-black-large.png'
import stylesUser from '../styles/User.module.css'
import { FaUserAlt } from "react-icons/fa"
import Spinner_Mini from './Spinner_Mini'
import Portrait from './Portrait'

export default function UserMenu() {
const {user, lang, corp} = useContext(AppContext)
const {currentUser, setUser} = user
const {setCorp, currentCorp} = corp

const trueCorp = parseInt(process.env.NEXT_PUBLIC_trueCorp)

let parsing = trueCorp === currentCorp
useEffect(()=>{

const fetchCorp = async(id) => {

  let moddedId = id.slice(14)
  const response = await fetch(`https://esi.evetech.net/latest/characters/${moddedId}/?datasource=tranquility`)
  const data = await response.json()

  setCorp(data.corporation_id)


}
if(currentUser){

  fetchCorp(currentUser.charId)
} else {
  setCorp()
}

},[currentUser, currentCorp])
  return (
  <>
  {!currentUser ? 
        
    <div className={stylesUser.user}>
        <FaUserAlt />
        <div className={stylesUser.container}>
          <div onClick={async (e)=> {
            try {
              let resp = await fetch('api/auth')
              let data = await resp.json()
              window.location.replace(data)
            } catch(err) {
              console.log(err)
            }
          }} className={stylesUser.item}>
            {eveLogoBL ? <Image src={eveLogoBL} /> :   <Spinner_Mini />}
          </div>
        </div>
    </div>
  :
    <div className={stylesUser.user}>
        {currentUser.charName}
        <div className={stylesUser.container}>
            <div className={stylesUser.item}>
              <Portrait id={currentUser.charId}/>
            </div>
            <div className={stylesUser.item}>
            {parsing ? <p>you rock</p> : <p>sorry, you suck</p>}
            
            </div>
            <div className={stylesUser.item}>
              <p onClick={async()=>{
                fetch('api/logout')
                setUser()}}>Logout</p>
            
            </div>
     
        </div>
    </div>
  }
    
  </>
  )
}
