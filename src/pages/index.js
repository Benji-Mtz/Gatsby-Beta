import * as React from "react"
import { Link } from "gatsby"
import { Jumbo } from "../components"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

import { Layout, Seo } from "../components"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
