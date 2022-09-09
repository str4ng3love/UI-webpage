import NavLI from "./NavLI"
import { useContext } from "react"
import { LangContext } from "../context/state"
import "/node_modules/flag-icons/css/flag-icons.min.css"
import { FaLanguage} from 'react-icons/fa'
import stylesHeader from '../styles/Header.module.css'


const Header = () => {
    const {lang, setLang} = useContext(LangContext)

    const selectLang = (e) => {

        return setLang(e.target.innerHTML)   
    }
    return (
    <>
        <nav className={stylesHeader.nav}>
            <ul>
                <NavLI dest="/" desc="Discord" />
                <NavLI dest="/" desc={lang==='PL'? 'O nas': 'About'} />
                <NavLI dest='/' desc={lang==='PL'? 'Główna': 'Home'}  />
                <NavLI external="https://zkillboard.com/corporation/98067874/" desc='zKillboard' />
              
                
                <li>
                
                    <span className={stylesHeader.language}><FaLanguage size={30}/>
                        <span className={stylesHeader.flags}>
                            <span className={stylesHeader.flag} onClick={selectLang}>PL</span>
                            <span className={stylesHeader.flag} onClick={selectLang}>EN</span>
                        </span>
                    </span>
                
                </li>
            </ul>

        </nav>
    </>
  )
}

export default Header