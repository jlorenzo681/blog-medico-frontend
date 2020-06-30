import React from "react"
import {graphql} from "gatsby"
import Card from "../components/card"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"
import LeftMenu from "../components/leftMenu"

export const query = graphql`
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
        publicURL
      }
    }
  }
`

const Article = ({data}) => {
  const article = data.strapiArticle
  return (
    <Layout>
      <LeftMenu/>
      <section className="section hero">
        <div className="hero-body">
          <Card article={article} key={article.id}/>
        </div>
      </section>
    </Layout>
  )
}

export default Article
