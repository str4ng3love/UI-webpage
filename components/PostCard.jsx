import Link from 'next/link'
import stylesPostCard from '../styles/PostCard.module.css'

const PostCard = (props) => {
  return (
  <Link href={`/post/${props.title}`} >
    <div className={stylesPostCard.newPost}>
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
    </div>
  </Link>
  )
}

export default PostCard