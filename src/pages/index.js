import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"

function IndexPage() {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm John.</h2>
      <Link to="/contact">Contact me!</Link>
    </Layout>
  )
}

export default IndexPage
