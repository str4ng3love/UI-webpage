import { AppContext } from "../context/state"
import { getSession } from '../lib/get-session'
import { useContext, useEffect  } from "react"
import Meta from "../components/Meta"

export default function About(props) {

const {lang, user, corp}= useContext(AppContext)
const {currentLang} = lang
const { currentUser, setUser} = user
const {currentCorp} = corp

const trueCorp = parseInt(process.env.NEXT_PUBLIC_trueCorp)

let parsing = trueCorp === currentCorp
useEffect(()=>{

  setUser(props.user)
}, [])

  return (
    <>
          <Meta title={ currentLang==='PL'? 'Useless Idea | O nas' : 'Useless Idea | About' }></Meta>
       
          {parsing? <p>Wariat</p>: <p>Noob</p>}
        
       
    </>
  )
}
export async function getServerSideProps({req, res}) {
  const session = await getSession(req, res)


  if(session.charName){
    let charId = session.charId
    let charName = session.charName
    let tokenExp = session.tokenExp
    return { 
      props: { 
        user: {
          charId, charName, tokenExp
        }
       }
    }
  } else {
    return  {
      props: {
        
      }
    }
  }
}