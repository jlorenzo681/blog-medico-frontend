import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"

const asideStyle = {
  width: '15%',
  float: 'left',
  margin: '10px 100px 0px 0px'
};

const pStyle = {
  width: '100px',
};

const LeftMenu = () => (
  <aside className="menu" style={asideStyle}>
    <p className="menu-label" style={pStyle}>
      Categorias
    </p>
    <ul className="menu-list">
      <li className={""}>
        <Link to={'/blog'}>
          Todas
        </Link>
      </li>
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
              <li key={category.node.strapiId} className={""}>
                <Link to={`/category/${category.node.strapiId}`}>
                  {category.node.name}
                </Link>
              </li>
            )
          })
        }
      />
    </ul>
  </aside>
)

export default LeftMenu
