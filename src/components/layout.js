import React from "react"
import PropTypes from "prop-types"

import "../assets/css/layout.css"
import "../assets/scss/layout.scss"

import Nav from "./nav"
import Seo from "./seo"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Nav />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
