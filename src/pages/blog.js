import React from "react"
import {StaticQuery, graphql} from "gatsby"

import ArticlesComponent from "../components/articles"
import Layout from "../components/layout"
import LeftMenu from "../components/leftMenu"

const blogContentStyle = {
  width: '70%'
};

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiArticle {
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
        }
      `}
      render={data => (
        <div className="">
          <LeftMenu/>
          <section className="section hero">
            <div className="hero-body">
              <div className="" style={blogContentStyle}>
                <h1>Todas</h1>
                <ArticlesComponent articles={data.allStrapiArticle.edges}/>
              </div>
            </div>
          </section>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
