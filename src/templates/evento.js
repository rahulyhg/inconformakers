import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./../components/PageWrapper"

class EventTemplate extends Component {
  render() {
    const post = this.props.data.wordpressWpEventos
    return (
      <Layout>
        <h1
          className="m-bottom-20 fs-custom color-white"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <div
          className="content_ color-white m-bottom-100"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Layout>
    )
  }
}

export default EventTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpEventos(id: { eq: $id }) {
      title
      content
    }
  }
`
