import React from 'react'
import { Link } from 'gatsby'
import Navigation from '../navigation'

const Header = ({ siteTitle, siteNavigation }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '3rem auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to={siteTitle.to}
          style={{
            color: 'white',
            textDecoration: 'none',
            textShadow: 'none',
          }}
        >
          {siteTitle.name}
        </Link>
      </h1>
      <Navigation siteNavigation={siteNavigation}></Navigation>
    </div>
  </div>
)

export default Header
