import React from 'react'
import '../styles/prism-ghcolors.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <div className='tracks'>
        <style jsx={true}>{`
          .tracks {
            @p: .lhCopy, .pa60;
          }
          h1 {
            @p: .f38, .mb25;
          }
        `}</style>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
      }
    }
  }
`