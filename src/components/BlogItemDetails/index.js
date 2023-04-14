// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogDetailsData extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const myBlogData = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const myData = await myBlogData.json()
    const updatedBlogData = {
      id: myData.id,
      topic: myData.topic,
      imageUrl: myData.image_url,
      avatarUrl: myData.avatar_url,
      author: myData.author,
      content: myData.content,
      title: myData.title,
    }
    this.setState({blogData: updatedBlogData, isLoading: false})
  }

  getBloggerDataInRestAPI = () => {
    const {blogData} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogData
    return (
      <div className="blog-information">
        <h1>{title}</h1>
        <div className="avatar-name-img">
          <img src={avatarUrl} alt={author} className="avt-url" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="img-url" />
        <p className="content-page">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-data-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.getBloggerDataInRestAPI()
        )}
      </div>
    )
  }
}
export default BlogDetailsData
