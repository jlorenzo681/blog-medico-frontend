import React from "react"
import {StaticQuery, graphql} from "gatsby"

import Layout from "../components/layout"

import "../assets/scss/layout.scss"

const IndexPage = () => (
  <Layout>
    <section className="section hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Lorem Ipsum
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet commodo elit, eu auctor metus. Aenean
            a orci mollis sem sodales imperdiet id id purus. Pellentesque sem sem, laoreet volutpat tortor in, tincidunt
            blandit nibh. Aenean at neque placerat, porttitor odio non, faucibus ante. Sed blandit nisl tortor, in tempus
            tortor venenatis id. Aenean volutpat tristique mauris non ultricies. Suspendisse potenti. Fusce diam erat,
            scelerisque eu mauris eu, porta malesuada purus. Integer vitae nunc in dui efficitur interdum eget vel sem.
            Pellentesque aliquam, massa ut fringilla egestas, erat dolor posuere lectus, quis aliquet purus metus et nibh.
            Quisque porttitor tempor pretium. Ut pretium ante purus, tempus egestas odio congue non.
    
            Proin at dui vel sem interdum vehicula. Integer fermentum massa quis nisl porttitor, et sollicitudin dolor
            finibus. Phasellus sagittis suscipit tellus nec vehicula. Suspendisse potenti. Cras porta non ex id mollis. In
            ut nisi enim. Praesent facilisis, ligula vel sagittis posuere, nulla nulla lobortis nibh, vel mattis nulla
            tellus et metus. Sed elementum varius tristique. Nunc egestas ullamcorper interdum. Ut enim lorem, varius vel
            lacinia a, mattis quis nunc.
    
            Mauris cursus turpis dui, vitae finibus orci semper vel. Nullam iaculis eros velit, et placerat magna semper
            fermentum. Etiam rutrum tortor arcu, non fermentum lorem faucibus at. Nunc malesuada at ipsum non rutrum.
            Suspendisse sagittis vel sapien in venenatis. Nunc sed dui sit amet purus gravida tincidunt vel at turpis.
            Pellentesque eget ipsum non tortor blandit maximus. Nam in erat in sapien rhoncus volutpat sit amet vitae
            nulla. Etiam id massa tempor ipsum suscipit elementum eu imperdiet massa. Sed sit amet tristique ante. Proin
            id pellentesque libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nam ultrices, augue eu sagittis ornare, risus justo malesuada erat, id gravida lectus leo ut ipsum. Vivamus
            pretium felis ac elit suscipit, id pharetra tortor interdum. Proin pellentesque nulla in commodo feugiat. Nam
            nec consectetur massa, at ornare magna.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
