import Image from "next/image"
import React from "react"
import Link from "next/link"
import Error from "./Error"
import Spinner_Mini from "./Spinner_Mini"
import getPortrait from '../hooks/getPortrait'


const Portrait = ({id}) => {
    const {data, isLoading, isError } = getPortrait(id)
    if(isLoading) return <Spinner_Mini />
    if (isError) return <Error />
  return (
    <>
    { data ? 
    <Link  href='/Profile' >
       <div>
          <Image  alt="User's portrait" width={64} height={64} src={data.px64x64}/>
      </div>
    </Link> : <Spinner_Mini /> }

    </>
  )
}

export default Portrait