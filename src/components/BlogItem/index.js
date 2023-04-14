// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItems = props => {
  const {blogItem} = props
  const {author, id, avatarUrl, imageUrl, topic, title} = blogItem
  return (
    <Link to={`/blogs/${id}`}>
      <div className="list-items">
        <img src={imageUrl} alt={title} className="img-blog" />
        <div className="about-blogger">
          <p className="topic-c">{topic}</p>
          <h2 className="heading-blog">{title}</h2>
          <div className="avatar-container">
            <img src={avatarUrl} alt={avatarUrl} className="avt-img" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItems
