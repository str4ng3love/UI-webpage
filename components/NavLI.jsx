import Link from "next/link"
import stylesNavLI from '../styles/NavLI.module.css'
const NavLI = ({desc, dest}) => {
  return (
    <li className={stylesNavLI.item}>
                    {dest? 
                         <Link href={dest}>
                        {desc}
                    </Link> 
                    : <></>
                    }
    </li>
  )
}

export default NavLI