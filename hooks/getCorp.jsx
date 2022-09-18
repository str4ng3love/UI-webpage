import useSWR from 'swr'
import fetcher from './fetcher'

const getPortrait = (id) => {
    console.log(id)
    const moddedId = id.slice(14) 
  
    const { data, error } = useSWR(`https://esi.evetech.net/latest/characters/${moddedId}/?datasource=tranquility`, fetcher)

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }

}
export default getPortrait