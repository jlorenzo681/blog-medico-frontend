import React from "react"
import {graphql} from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"
import LeftMenu from "../components/leftMenu"

const blogContentStyle = {
  width: '70%'
};

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
      <div className="" style={blogContentStyle}>
          <h1>{article.title}</h1>
        <div className="">
          <div className="">
            <ReactMarkdown source={article.content}/>
            <p>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article
