// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItems from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogLists extends Component {
  state = {isLoading: true, blogApiData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedBlog = data.map(eachData => ({
      author: eachData.author,
      id: eachData.id,
      avatarUrl: eachData.avatar_url,
      title: eachData.title,
      topic: eachData.topic,
      imageUrl: eachData.image_url,
    }))
    this.setState({blogApiData: updatedBlog, isLoading: false})
  }

  render() {
    const {isLoading, blogApiData} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-list">
            {blogApiData.map(eachBlog => (
              <BlogItems blogItem={eachBlog} key={eachBlog.id} />
            ))}
          </div>
        )}
      </div>
    )
  }
}
export default BlogLists
