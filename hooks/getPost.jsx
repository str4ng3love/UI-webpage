import useSWR from "swr";
import fetcher from "./fetcher";

const getPost = (id) => {
 
    const {data, error} = useSWR(`/api/posts/post?post=${id}`, fetcher)
    return {
        post: data,
        isLoading: !error && !data,
        isError: error
    }
}
export default getPost