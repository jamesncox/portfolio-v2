import React from 'react'
import FeaturedBlogs from './FeaturedBlogs'
import BlogLink from './BlogLink'

function Blog() {

    return (
      <div id="blog">
        <p className="section-title">featured blog posts</p>
        <div className="blogs-container">
          <FeaturedBlogs />
          <BlogLink />
        </div>
      </div>
    )
}

export default Blog