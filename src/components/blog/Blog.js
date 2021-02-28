import React from 'react'
import FeaturedBlogs from './FeaturedBlogs'
import BlogLink from './BlogLink'

function Blog() {

    return (
      <div id="blog">
        <h2 className="section-title">featured blog posts</h2>
        <div className="blogs-container">
          <FeaturedBlogs />
          <BlogLink />
        </div>
      </div>
    )
}

export default Blog