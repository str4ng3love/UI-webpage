import { useContext } from 'react'
import { AppContext } from '../context/state'
import stylesNavList from '../styles/NavList.module.css'

const NavList = () => {
  const {user} = useContext(AppContext)
  const { currentUser } = user
  return (
    <>
        <li>
            <span className={stylesNavList.logo}>UI | Ω
                <div className={stylesNavList.menu}>
                    <a className={stylesNavList.item}  onClick={(e)=> {
                      console.log(currentUser)
                    }} href="#">check</a>
                    <a className={stylesNavList.item} href="https://zkillboard.com/corporation/98067874/" target="_blank" rel="noopener noreferrer">zKillboard</a>
                    <a className={stylesNavList.item} href="https://www.facebook.com/uselessidea.co/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    {!currentUser ? 
                      <a className={stylesNavList.item} onClick={async (e)=> {
                      try {
                        let resp = await fetch('api/auth')
                        let data = await resp.json()
                        window.location.replace(data)
                      } catch(err) {
                        console.log(err)
                      }
                    }} >UI Zone</a>
                  :
                  <></>}
                </div>
            </span>
        </li>
    </>
  )
}

export default NavList