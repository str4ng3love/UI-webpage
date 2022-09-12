import Link from "next/link"
import stylesNavLI from '../styles/NavLI.module.css'
const NavLI = ({desc, dest, external}) => {
  return (
    <li className={stylesNavLI.item}>
                    <span>Ω</span>
                    {dest? 
                         <Link href={dest}>
                        {desc}
                    </Link> 
                    : <></>
                    }
                  
                   { external? <a href={external} rel="noopener noreferrer">{desc}</a> : <></>}
                    <span>Ω</span>
    </li>
  )
}

export default NavLI