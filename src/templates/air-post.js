import React from "react"
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'
// import remark from 'remark'
// import reactRenderer from 'remark-react'
import { graphql } from "gatsby"
import Layout from "../components/layout-stories"

export default ({ data }) => {
  // const { airtable: post } = data
  // console.log(data)
  return (
    <Layout>
      <div>
        <h1>{data.airtable.title}</h1>
        <h5>{data.airtable.published_date}</h5>
        <h5>Written by {data.airtable.author}</h5>
        <img
          src={data.airtable.cover[0].url}
          style={{
            display: 'block',
            marginBottom: '1rem',
            marginTop: '1rem',
            width: '100%',
            height: 'auto'
          }}
          alt=""
        />
        {/* <div id='preview'>
                {remark().use(reactRenderer).processSync(data.airtable.story).contents}
        </div> */}
        <div
          dangerouslySetInnerHTML={{
            __html: unified()
              .use(markdown)
              .use(html)
              .processSync(data.airtable.story)
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    airtable(slug: { eq: $slug }) {
      id
      slug
      title
      cover {
        id
        url
      }
      story
      status
      published_date(formatString: "DD MMMM, YYYY")
      author
    }
  }
`