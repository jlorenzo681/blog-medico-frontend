import React from "react"
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";

const cardStyle = {
  marginBottom: '50px'
};

const Card = ({article}) => {
    return (
      <div className="card" style={cardStyle}>
      <div className="card-image">
        <figure className="image">
          <img
            src={article.image.publicURL}
            alt={article.image.publicURL}
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
            {/*{article.category.name}*/}
          </p>
          <p id="title" className="">
            {article.title}
          </p>
          <div className="">
            <ReactMarkdown source={article.content}/>
            <p>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </div>
    )};

export default Card
