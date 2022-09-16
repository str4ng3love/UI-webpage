import Image from 'next/image'
import { useContext } from 'react'
import { AppContext } from '../context/state'
import eveLogoBL from '../public/images/eve-sso-login-black-large.png'
import stylesUser from '../styles/User.module.css'
import { FaUserAlt } from "react-icons/fa"
import Spinner_Mini from './Spinner_Mini'
import Portrait from './Portrait'



export default function UserMenu(props) {
const {user, lang} = useContext(AppContext)
const {currentUser} = user



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
              <Portrait id={currentUser.charId}/>
            </div>
            <div className={stylesUser.item}>
              <Portrait id={currentUser.charId}/>
            </div>
        </div>
    </div>
  }
    
  </>
  )
}
