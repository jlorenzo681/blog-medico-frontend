import React from "react"
import {graphql} from "gatsby"

import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"
import LeftMenu from "../components/leftMenu"

export const query = graphql`
  query Category($id: Int!) {
    articles: allStrapiArticle(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          title
          category {
            name
          }
          image {
            publicURL
          }
        }
      }
    }
    category: strapiCategory(strapiId: { eq: $id }) {
      name
    }
  }
`

const Category = ({data}) => {
  const articles = data.articles.edges
  const category = data.category.name
  
  return (
    <Layout>
      <div className="">
        <LeftMenu/>
        <section className="section hero">
          <div className="hero-body">
            <div className="">
              <h1>{category}</h1>
              <ArticlesComponent articles={articles}/>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Category
