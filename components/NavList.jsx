import { useContext } from 'react'
import { AppContext } from '../context/state'
import Link from 'next/link'
import stylesNavList from '../styles/NavList.module.css'


const NavList = () => {
  const {user, lang} = useContext(AppContext)
  const { currentUser } = user
  const { currentLang} = lang
  return (
    <>
        <li>
            <span className={stylesNavList.logo}>UI | Ω
                <div className={stylesNavList.menu}>
                  <Link href='/Posts' className={stylesNavList.item}  >{currentLang === 'EN' ? 'Posts' : 'Posty' }</Link>
                  <a className={stylesNavList.item}  onClick={(e)=> {
                    console.log(currentUser)
                  }} href="#">check</a>
                  <a className={stylesNavList.item} href="https://zkillboard.com/corporation/98067874/" target="_blank" rel="noopener noreferrer">zKillboard</a>
                  <a className={stylesNavList.item} href="https://www.facebook.com/uselessidea.co/" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            </span>
        </li>
    </>
  )
}

export default NavList