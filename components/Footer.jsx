import Link from 'next/link'
import { useContext } from 'react'
import { LangContext } from '../context/state'
import stylesFooter from '../styles/Footer.module.css'
import Image from 'next/image'
import next from '../public/images/logotypes/next.js/dark-background/nextjs-logotype-dark-background.png'
import vercel from '../public/images/logotypes/vercel/light/vercel-logotype-light.png'
import wreck from '../public/images/wreck.png'
import { SiFacebook } from 'react-icons/si'
import { TbArrowBigTop, TbArrowBigUpLine, TbArrowBigUpLines} from 'react-icons/tb'

const Footer = () => {
    const {lang} = useContext(LangContext)
  return (
    <footer className={stylesFooter.footer}>
        {lang==='PL'?
        <div className={stylesFooter.Container}>
            <div className={stylesFooter.tm}>
                <span className={stylesFooter.nextspan}>
                    <a href="https://nextjs.org">Built with <Image height={15} width={90} src={next}/></a>
                </span>
                <span className={stylesFooter.nextspan}>
                    <a href="https://vercel.com">Powered by <Image height={15} width={90} src={vercel}/></a>
                </span>
            </div>
            <div className={stylesFooter.Links}>
                <ul>
                    <li>
                        <a href="https://discord.gg/DdXjK6v">Discord</a>
                    </li>
                    <li>
                        <Link href="/About">O nas</Link>
                    </li>
                    <li>
                        <Link href="/">Główna</Link>
                    </li>
                </ul>
                <ul>
                    <li><a href="https://www.facebook.com/uselessidea.co/"><SiFacebook/> Facebook</a></li>
                    <li><a href="https://zkillboard.com/corporation/98067874/"><Image src={wreck} /> zKillboard</a></li>
                </ul>
            </div>
            <span onClick={(e)=>{
                window.scrollTo({behavior: 'smooth',
                top: 0
            })
            }}
            className={stylesFooter.arrow}><TbArrowBigTop id={stylesFooter.ar1} size={50} /><TbArrowBigUpLine id={stylesFooter.ar2}  size={50}/> <TbArrowBigUpLines id={stylesFooter.ar3}  size={50} /></span>
         
        </div>
        :
        <div className={stylesFooter.Container}>
              <div className={stylesFooter.tm}> 
                <span className={stylesFooter.nextspan}>
                    <a target="_blank" href="https://nextjs.org">Built with <Image height={15} width={90} src={next}/></a>
                </span>
                <span className={stylesFooter.nextspan}>
                    <a target="_blank" href="https://vercel.com">Powered by <Image height={15} width={90} src={vercel}/></a>
                </span>
            </div>

            <div className={stylesFooter.Links}>
                <ul>
                    <li>
                        <a href="https://discord.gg/DdXjK6v">Discord</a>
                    </li>
                    <li>
                        <Link href="/About">About</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li><a target="_blank" href="https://zkillboard.com/corporation/98067874/"><Image src={wreck} /> zKillboard</a></li>
                    <li><a target="_blank" href="https://www.facebook.com/uselessidea.co/"><SiFacebook/> Facebook</a></li>
                </ul>
            </div>
            <span onClick={(e)=>{
                window.scrollTo({behavior: 'smooth',
                top: 0
            })
            }} className={stylesFooter.arrow}><TbArrowBigTop id={stylesFooter.ar1} size={50} /><TbArrowBigUpLine id={stylesFooter.ar2}  size={50}/> <TbArrowBigUpLines id={stylesFooter.ar3}  size={50} /></span>
        </div>
        }  
    </footer>
  )
}

export default Footer