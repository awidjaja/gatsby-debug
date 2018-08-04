import React from "react"
import { Link } from "gatsby"

const Navigation = ({ siteNavigation }) => (
  <ul style={{ listStyle: `none`, float: `right` }}>
    {siteNavigation.map((pages,i) => {
      return (
        <li key={i} style={{ display: `inline-block`, marginRight: `2rem` }}>
        <Link to={pages.to}>
          {pages.name}
        </Link>
        </li>
      )
    })}
  </ul>
)

export default Navigation
