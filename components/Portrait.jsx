import Image from "next/image"
import Error from "./Error"
import Spinner_Mini from "./Spinner_Mini"
import getPortrait from '../hooks/getPortrait'

const Portrait = ({id}) => {
    const {data, isLoading, isError } = getPortrait(id)
    if(isLoading) return <Spinner_Mini />
    if (isError) return <Error />
  return (
    <>
    { data ? <Image alt="User's portrait" width={64} height={64} src={data.px64x64}/> : <Spinner_Mini /> }

    </>
  )
}

export default Portrait