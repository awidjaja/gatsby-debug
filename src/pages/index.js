import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to Poll App site.</p>
    <Link to="/stories/">Go to stories page</Link>
  </Layout>
)

export default IndexPage
