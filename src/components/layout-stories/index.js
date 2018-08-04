import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { rhythm } from "../../utils/typography"
import { css } from "react-emotion"

import Header from '../header'

const LayoutStories = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteStories {
              title
            }
          }
        }
      }
    `}
    render={data => (
    <>
      <Helmet
        title={data.site.siteMetadata.siteStories.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header
        siteTitle={{name: data.site.siteMetadata.siteStories.title, to: '/stories/'}}
        siteNavigation={[
          { name: 'home', to: '/' },
        ]}
      />
      <div
        className={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        {children}
      </div>
    </>
    )}
  />
)

LayoutStories.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutStories
