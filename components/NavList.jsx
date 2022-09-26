import { useContext } from 'react'
import { AppContext } from '../context/state'
import Link from 'next/link'
import stylesNavList from '../styles/NavList.module.css'


const NavList = () => {
  const {lang, corp} = useContext(AppContext)
  const { currentLang} = lang
  const {currentCorp} = corp
  const authorized = currentCorp === parseInt(process.env.NEXT_PUBLIC_trueCorp)
  return (
    <>
        <li>
            <span className={stylesNavList.logo}>UI | Ω
                <div className={stylesNavList.menu}>
                  <Link href='/Posts' className={stylesNavList.item}  >{currentLang === 'EN' ? 'Posts' : 'Posty' }</Link>
                  {authorized ? <a className={stylesNavList.item} href="https://pf.krainagoblinow.pl" target="_blank" rel="noopener noreferrer">Pathfinder</a>: <></>}
                  <a className={stylesNavList.item} href="https://zkillboard.com/corporation/98067874/" target="_blank" rel="noopener noreferrer">zKillboard</a>
                  <a className={stylesNavList.item} href="https://www.facebook.com/uselessidea.co/" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            </span>
        </li>
    </>
  )
}

export default NavList