import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Home() {
  const { contentfulTitle: { title, titleSecond } } = useStaticQuery(graphql`
    query MyQuery {
      contentfulTitle {
        title
        titleSecond
      }
     }
  `)

  return (
    <>
      <h1>{title}</h1>
      <p>{titleSecond}</p>
    </>
  )
}
