import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"

const Nav = () => (
  <div>
    <div className={"container is-widescreen"}>
      <nav className="navbar container is-widescreen">
        <div className="navbar-brand">
          <ul className="navbar-item">
            <li class="navbar-item">
              <Link to="/">
                Inicio
              </Link>
            </li>
          </ul>
        </div>
        
        <div className={"navbar-menu"}>
          <div className={"navbar-start"}>
            <ul className="navbar-item">
              <li className="navbar-item">
                <Link to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
  
          <div className="navbar-end">
            <ul className="navbar-item">
              <StaticQuery
                query={graphql`
                query {
                  allStrapiCategory {
                    edges {
                      node {
                        strapiId
                        name
                      }
                    }
                  }
                }
              `}
                render={data =>
                  data.allStrapiCategory.edges.map((category, i) => {
                    return (
                      <li key={category.node.strapiId} className={"navbar-item"}>
                        <Link to={`/category/${category.node.strapiId}`}>
                          {category.node.name}
                        </Link>
                      </li>
                    )
                  })
                }
              />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
)

export default Nav
