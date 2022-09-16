import Image from "next/image"
import Error from "./Error"
import Spinner_Mini from "./Spinner_Mini"
import useUser from '../hooks/useUser'

const Portrait = ({id}) => {
    const {data, isLoading, isError } = useUser(id)
    if(isLoading) return <Spinner_Mini />
    if (isError) return <Error />
  return (
    <Image width={64} height={64} src={data.px64x64}/>
  )
}

export default Portrait