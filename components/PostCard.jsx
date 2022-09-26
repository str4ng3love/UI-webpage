import stylesPostCard from '../styles/PostCard.module.css'

const PostCard = (props) => {
  return (
    <div className={stylesPostCard.newPost}>
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
  </div>
  )
}

export default PostCard