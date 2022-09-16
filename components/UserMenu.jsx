import Image from 'next/image'
import { useContext } from 'react'
import { AppContext } from '../context/state'
import eveLogoBL from '../public/images/eve-sso-login-black-large.png'
import stylesUser from '../styles/User.module.css'
import { FaUserAlt } from "react-icons/fa"


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
            <Image src={eveLogoBL} />
          </div>
        </div>
    </div>
  :
    <div className={stylesUser.user}>
        {currentUser.charName}
        <div className={stylesUser.container}>
            <div className={stylesUser.item}>
              
            </div>
        </div>
    </div>
  }
    
  </>
  )
}
