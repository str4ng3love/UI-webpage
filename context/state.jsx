import { useState, createContext } from "react"





const defaultLang = 'PL'
const LangContext = createContext(defaultLang)
const LangWrapper = ({children}) => {
  const [lang , setLang] = useState(defaultLang)
  return (
    <LangContext.Provider value={{lang, setLang}}>
       {children}
    </LangContext.Provider>
  )
}

export { LangWrapper, LangContext }