import NavLI from "./NavLI"
import "/node_modules/flag-icons/css/flag-icons.min.css"
import { FaLanguage } from 'react-icons/fa'
import stylesHeader from '../styles/Header.module.css'


const Header = () => {
  return (
    <>
        <nav className={stylesHeader.nav}>
            <ul>
                <NavLI dest="/" desc="Discord" />
                <NavLI dest="/" desc="About" />
                <NavLI dest='/' desc='Home' />
                <NavLI external="https://zkillboard.com/corporation/98067874/" desc='zKillboard' />
              
                
                <li>
                
                    <span className={stylesHeader.language}><FaLanguage size={30}/>
                        <span className={stylesHeader.flags}>
                            <span className={stylesHeader.flag}>PL</span>
                            <span className={stylesHeader.flag}>EN</span>
                        </span>
                    </span>
                
                </li>
            </ul>

        </nav>
    </>
  )
}

export default Header