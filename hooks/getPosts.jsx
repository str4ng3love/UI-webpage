import useSWR from "swr"
import fetcher from './fetcher'


const getPosts = () => {

    const { data, error } = useSWR(`/api/posts/post`, fetcher);
    return {
        posts: data,
        isLoading: !error && !data,
        isError: error
    }

}
export default getPosts