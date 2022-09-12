import { LangContext } from "../context/state"
import { useContext } from "react"
import Meta from "../components/Meta"

const About = () => {
const lang = useContext(LangContext)

  return (
    <>
        {lang === `PL`? 
        <>
          <Meta title='Useless Idea | O nas'></Meta>
          
        </>
        :
        <>
          <Meta title='Useless Idea | About'></Meta>
        </>}
    </>
  )
}

export default About