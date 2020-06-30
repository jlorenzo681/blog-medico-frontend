import React, {Component} from "react"
import {Link} from "gatsby"
import Card from '../components/card'

const CardList = ({article}) => {
  return (
    <Link to={`/article/${article.strapiId}`} className="">
      <Card article={article}/>
    </Link>
  )
}

export default CardList
