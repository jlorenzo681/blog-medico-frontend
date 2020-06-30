import React from "react"
import {Link} from "gatsby"

const cardStyle = {
  marginBottom: '50px'
};

const Card = ({article}) => {
  return (
    <Link to={`/article/${article.node.strapiId}`} className="">
      <div className="card" style={cardStyle}>
        <div className="card-image">
          <figure className="image">
            <img
              src={article.node.image.publicURL}
              alt={article.node.image.publicURL}
              height="100"
            /></figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>
          <div className="content">
            <p id="category" className="">
              {article.node.category.name}
            </p>
            <p id="title" className="">
              {article.node.title}
            </p>
          </div>
        </div>
      </div>
    </Link>
)
}

export default Card
