import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"

const navStyle = {
  marginBottom: '50px'
};

const Nav = () => (
  <div className="is-primary" style={navStyle}>
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <ul className="navbar-item">
            <li className="navbar-item">
              <Link to="/">
                Inicio
              </Link>
            </li>
          </ul>
          {/*<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">*/}
            {/*<span aria-hidden="true"></span>*/}
            {/*<span aria-hidden="true"></span>*/}
            {/*<span aria-hidden="true"></span>*/}
          {/*</a>*/}
        </div>
        
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <ul className="navbar-item">
              <li className="navbar-item">
                <Link to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Nav
