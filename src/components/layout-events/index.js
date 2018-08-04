import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { rhythm } from "../../utils/typography"
import { css } from "react-emotion"

import Header from '../header'

const LayoutEvents = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteEvents {
              title
            }
          }
        }
      }
    `}
    render={data => (
    <>
      <Helmet
        title={data.site.siteMetadata.siteEvents.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header
        siteTitle={{name: data.site.siteMetadata.siteEvents.title, to: '/events/'}}
        siteNavigation={[
          { name: 'home', to: '/' },
          { name: 'about', to: '/events/about/' },
          { name: 'my-files', to: '/events/my-files/' },
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

LayoutEvents.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutEvents
