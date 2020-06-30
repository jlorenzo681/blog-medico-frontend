import React from "react"
import Card from "./card"

const Articles = ({articles}) => {
  const leftArticlesCount = Math.ceil(articles.length / 5)
  const leftArticles = articles.slice(0, leftArticlesCount)
  const rightArticles = articles.slice(leftArticlesCount, articles.length)
  
  return (
    <div>
      <div className="">
        <div>
          {leftArticles.map((article, i) => {
            return (
              <Card article={article} key={`article__${article.node.id}`}/>
            )
          })}
        </div>
        <div>
          <div className="">
            {rightArticles.map((article, i) => {
              return (
                <Card article={article} key={`article__${article.node.id}`}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
