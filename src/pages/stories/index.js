import React from "react"
// import { graphql } from "gatsby"
import { Link, graphql } from "gatsby"
import { css } from "react-emotion"
import { rhythm } from "../../utils/typography"
import Layout from "../../components/layout-stories"

export default ({ data }) => {
  const { edges: posts } = data.allAirtable
  // console.log(posts)
// export default () => {
  return(
    <Layout>
      <h1>Airtable Stories</h1>
      <h4>{data.allAirtable.totalCount} Posts</h4>
      {posts.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={`/stories${node.slug}`}
            className={css`
            text-decoration: none;
            color: inherit;
            `
            }
          >
            <h3
              className={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.title}{" "}
              <span
                className={css`
                  color: #bbb;
                `}
              >
                — {node.published_date}
              </span>
            </h3>
            {/* <p>{node.excerpt}</p> */}
          </Link>
        </div>
      ))}
      <img
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo"
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    allAirtable {
      totalCount
      edges {
        node {
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
    }
  }
`