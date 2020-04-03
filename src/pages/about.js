import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

function AboutPage() {
  return (
    <Layout>
      <Head title="About" />
      <h1>John Doe</h1>
      <p>Web Developer in Münster Germany</p>
      <Link to="/contact">Contact</Link>
    </Layout>
  )
}

export default AboutPage
