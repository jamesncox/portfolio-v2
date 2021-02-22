import React from 'react'
import FeaturedBlogs from './FeaturedBlogs'
import BlogLink from './BlogLink'

function Blog() {

    return (
      <>
        <p className="section-title">featured blog posts</p>
        <div className="blogs-container" id="blog">
          <FeaturedBlogs />
          <BlogLink />
      </div>
      </>
    )
}

export default Blog